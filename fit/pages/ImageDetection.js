import { StyleSheet, FlatList, Button, Platform, View, Text } from 'react-native';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native'
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { Camera } from 'expo-camera'
import * as tf from '@tensorflow/tfjs'

const TensorCamera = cameraWithTensors(Camera);


export default function ImageDetection() {
  const [model, setModel] = useState(mobilenet.MobileNet)

  let textureDims = Platform.OS == 'ios'
    ? { height: 1920, width: 1080 }
    : { height: 1200, width: 1600 };

  function handleCameraStream(images) {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      if (!model || !nextImageTensor)
        throw new Error('No model or image tensor');
      model.classify(nextImageTensor).then((prediction) => {
        console.log(prediction)
      })
    };
    loop();
  }

  const initializeTensorflow = async () => {
    await tf.ready();
    tf.getBackend();
  }

  useEffect(() => {
    console.log('starting')
    const load = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log(status, 'status');

      await initializeTensorflow()

      setModel(await mobilenet.load())
    };
    load();


  }, []);

  return (
    <View style={styles.container}>
      <TensorCamera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}
        useCustomShadersToResize={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backfround: '#fff',
  },
  camera: {},
});
