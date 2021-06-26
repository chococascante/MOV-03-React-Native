import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const handleCameraPress = () => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, async response => {
      console.log(response);
      if (response.assets) {
        try {
          await AsyncStorage.setItem(
            'imagenes',
            JSON.stringify({imgs: response.assets}),
          );
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleCameraVideoPress = () => {
    launchCamera({mediaType: 'video', saveToPhotos: true}, async response => {
      console.log(response);
      if (response.assets) {
        try {
          await AsyncStorage.setItem(
            'imagenes',
            JSON.stringify({imgs: response.assets}),
          );
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const getStorageValue = async () => {
    try {
      const imagenes = await AsyncStorage.getItem('imagenes');
      console.log(imagenes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGalleryPress = () => {
    launchImageLibrary(
      {mediaType: 'mixed', selectionLimit: 0},
      async response => {
        console.log(response);
        if (response.assets) {
          try {
            await AsyncStorage.setItem(
              'imagenes',
              JSON.stringify({imgs: response.assets}),
            );
          } catch (error) {
            console.log(error);
          }
        }
      },
    );
  };

  return (
    <SafeAreaView>
      <Button title="Abrir Cámara para Foto" onPress={handleCameraPress} />
      <Button
        title="Abrir Cámara para Video"
        onPress={handleCameraVideoPress}
      />
      <Button title="Abrir galería" onPress={handleGalleryPress} />
      <Button title="Valor en Storage" onPress={getStorageValue} />
    </SafeAreaView>
  );
};

export default App;
