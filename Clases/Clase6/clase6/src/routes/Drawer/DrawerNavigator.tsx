import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../components/screens/Home';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Navigator initialRouteName="">
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default DrawerNavigator;
