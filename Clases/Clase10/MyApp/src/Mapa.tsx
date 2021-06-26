import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibHVpc2Nhc2NhdGUiLCJhIjoiY2thZTV4enBnMDkzejJ6bXdteW9zdXVpYSJ9.H9s_qcrjappLp5MRtgHAxQ',
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 1200,
    width: 400,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
const Mapa = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL="mapbox://styles/luiscascate/ckae63a4i0psf1iqjlc6rhfg1"
        />
      </View>
    </View>
  );
};

export default Mapa;
