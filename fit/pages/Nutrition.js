import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable, Button, Image, Modal, FlatList } from 'react-native'
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'
import { fetch, decodeJpeg } from '@tensorflow/tfjs-react-native'
import { Camera } from 'expo-camera';
import * as jpeg from 'jpeg-js'
import * as ImageManipulator from "expo-image-manipulator";

const Nutrition = () => {
    const [isTf, setIsTf] = useState(false);
    const [isModelReady, setIsModelReady] = useState(false);
    const [model, setModel] = useState(null)
    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null)
    const [isListView, setIsListView] = useState(false)
    const [foodItems, setFoodItems] = useState([])
    const [totalProtein, setTotalProtein] = useState(0)
    const [totalFat, setTotalFat] = useState(0)
    const [totalCarbs, setTotalCarbs] = useState(0)

    const getPermissions = async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        console.log(cameraPermission)
        // setCameraPermission(cameraPermission.status === 'granted');
        if (
            cameraPermission.status !== 'granted'
        ) {
            alert('Permission for media access needed.');
        }
    }

    const imageToTensor = (rawImageData) => {
        const { width, height, data } = jpeg.decode(rawImageData, {
            useTArray: true,
        }); // return as Uint8Array

        // Drop the alpha channel info for mobilenet
        const buffer = new Uint8Array(width * height * 3);
        let offset = 0; // offset into original data
        for (let i = 0; i < buffer.length; i += 3) {
            buffer[i] = data[offset];
            buffer[i + 1] = data[offset + 1];
            buffer[i + 2] = data[offset + 2];

            offset += 4;
        }

        return tf.tensor3d(buffer, [height, width, 3]);
    };

    const detectObjectsAsync = async (source) => {
        try {
            const imageAssetPath = Image.resolveAssetSource(source);
            const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
            const rawImageData = await response.arrayBuffer();
            const imageTensor = imageToTensor(rawImageData);
            const newPredictions = await model.classify(imageTensor);
            // setPredictions(newPredictions);
            // console.log("=== Detect objects predictions: ===");
            // console.log(newPredictions);

            let topPrediction = newPredictions[0].className
            return topPrediction
        } catch (error) {
            console.log("Exception Error: ", error);
        }
    };

    useEffect(() => {
        const load = async () => {
            await tf.ready()
            setIsTf(true)
            console.log('Tf ready', isTf)
            setModel(await mobilenet.load())
            setIsModelReady(true)
            console.log('Tf ready', isTf, 'model ready', isModelReady)

            await getPermissions()
        }
        load()
    }, [])

    const handleNewFoodItem = (pred) => {
        // console.log(pred, 'are we here')
        const knownFoodList = [
            'orange',
            'Granny Smith',
            'pizza',
            'coffee mug',
            'pineapple',
            'banana',
            'fig',
            'cucumber',
            'cauliflower',
            'head cabbage',
            'pretzel',
            'bagel',
            'lemon',
            'bell pepper',
            'cheeseburger',
        ]

        const knownFoodListFacts = {
            'orange': { protein: 0.6, fat: 0.1, carbs: 8.9 },
            'Granny Smith': { protein: 0.3, fat: 0.2, carbs: 14 },
            'coffee mug': { protein: 0.3, fat: 0.1, carbs: 0 },
            'pineapple': { protein: 3.6, fat: 0.8, carbs: 328 },
            'banana': { protein: 1.3, fat: 0.4, carbs: 105 },
            'fig': { protein: 0.4, fat: 0.2, carbs: 37 },
            'bell pepper': { protein: 1.1, fat: 0.2, carbs: 32 },
            'cucumber': { protein: 1.3, fat: 0.2, carbs: 30 },
            'cauliflower': { protein: 11, fat: 2.6, carbs: 132 },
            'head cabbage': { protein: 17.1, fat: 0.9, carbs: 306 },
            'pretzel': { protein: 2.8, fat: 0.8, carbs: 109 },
            'bagel': { protein: 11, fat: 1.4, carbs: 277 },
            'lemon': { protein: 0.9, fat: 0.3, carbs: 24 },
            'cheeseburger': { protein: 30, fat: 29, carbs: 39 },

        }

        if (knownFoodList.includes(pred)) {
            console.log(pred)

            console.log('protein:', knownFoodListFacts[pred]['protein'])
            console.log('fat', knownFoodListFacts[pred]['fat'])
            console.log('carbs', knownFoodListFacts[pred]['carbs'])

            let currentProtein = totalProtein
            let updatedProtein = currentProtein + knownFoodListFacts[pred]['protein']
            setTotalProtein(updatedProtein)

            let currentFat = totalFat
            let updatedFat = currentFat + knownFoodListFacts[pred]['fat']
            setTotalFat(updatedFat)

            let currentCarbs = totalCarbs
            let updatedCarbs = currentCarbs + knownFoodListFacts[pred]['carbs']
            setTotalCarbs(updatedCarbs)

        }
    }

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);

            console.log(data.uri);
            setImageUri(data.uri);

            const manipResponse = await ImageManipulator.manipulateAsync(
                data.uri,
                [{ resize: { width: 900 } }],
                { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
            );

            const source = { uri: manipResponse.uri };

            // get pred
            const pred = await detectObjectsAsync(source);

            // add to your list
            setFoodItems([...foodItems, { text: pred, id: Math.random().toString() }])

            // change view
            // console.log(pred, foodItems)
            setIsListView(true)

            handleNewFoodItem(pred)
        }

    };

    return (
        <>
            {!isListView && <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.text}>Nutrition</Text>
                </View>
                <Camera
                    ref={(ref) => setCamera(ref)}
                    style={styles.camera}
                    type={Camera.Constants.Type.back}
                />
                <Button title={'Take Picture'} onPress={takePicture} />
                <Button title={'View Todays Food'} onPress={() => setIsListView(true)} />
                {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
            </View>
            }
            {isListView && <View style={styles.container}>
                <Text style={styles.text}>Today's macros</Text>
                <View style={{ flex: 4 }}>
                    <FlatList
                        data={foodItems}
                        renderItem={(itemData) => {
                            return (
                                <Text style={styles.list}>
                                    {itemData.item.text}

                                </Text>

                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false} />
                </View>
                <View style={styles.list}>
                    <Text>Protein {totalProtein}</Text>
                    <Text>Carbs {totalCarbs}</Text>
                    <Text>Fat {totalFat}</Text>
                </View>
                <Button title={'Take Picture'} onPress={() => setIsListView(false)} />

            </View>
            }
        </>
    )
}
// source for camera: https://stackoverflow.com/questions/66006723/how-to-capture-image-using-expo-camera-in-react-native
// image classification tutorial: https://towardsdatascience.com/deep-learning-for-detecting-objects-in-an-image-on-mobile-devices-7d5b2e5621f9
// another image classification tutorial: https://www.bam.tech/article/how-to-recognize-real-time-object-in-reactnative-for-dummies
export default Nutrition;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e4d9',
        height: '100%',
        width: '100%',
    },
    item: {
        backgroundColor: '#6db06c',
        maxHeight: '100%',
        height: 80,
    },
    text: {
        padding: 15,
        fontSize: 30,
        fondWeight: "",
        opacity: 0.55,
    },
    camera: {
        // flex: 1,
        flexDirection: 'row',
        height: '50%'
    },
    list: {
        fontSize: 20,
        paddingLeft: 10,
        opacity: 0.55,
    }
});
