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
            //   setImageToAnalyze(source);

            const pred = await detectObjectsAsync(source);
            // add to your list
            setFoodItems([...foodItems, { text: pred, id: Math.random().toString() }])


            console.log(pred, foodItems)
            setIsListView(true)
        }

    };

    return (
        <>
            {!isListView && <View style={styles.container}>
                <Text style={styles.text}>Nutrition</Text>
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
                                <Text>
                                    {itemData.item.text}
                                </Text>
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false} />
                </View>
                <Button title={'Take Picture'} onPress={() => setIsListView(false)} />

            </View>
            }
        </>
    )
}
// source https://stackoverflow.com/questions/66006723/how-to-capture-image-using-expo-camera-in-react-native
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
    }
});
