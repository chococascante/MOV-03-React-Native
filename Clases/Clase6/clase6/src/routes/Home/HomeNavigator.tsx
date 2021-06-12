import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../components/screens/Home';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default HomeNavigator;
