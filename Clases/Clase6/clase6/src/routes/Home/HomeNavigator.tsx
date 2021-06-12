import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../components/screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#1A66BF',
          },
          headerTintColor: '#fff',
          headerLeft: () => <Icon size={30} color="#fff" name="chevron-left" />,
        }}
      />
    </Navigator>
  );
};

export default HomeNavigator;
