import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../../components/screens/Auth';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import Login from '../../components/screens/Login';
import Signin from '../../components/screens/Signin';

const {Navigator, Screen} = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Auth" component={Auth} />
      <Screen name="Login" component={Login} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Drawer Navigator" component={DrawerNavigator} />
    </Navigator>
  );
};

export default AuthNavigator;
