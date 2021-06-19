/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/routes/Drawer/DrawerNavigator';
import Auth from './src/components/screens/Auth';
import AuthNavigator from './src/routes/Auth';
import firebase from '@react-native-firebase/app';
import {ThemeProvider} from '@emotion/react';
import theme from './src/styles/theme';

var firebaseConfig = {
  apiKey: 'AIzaSyCf2p_sdXEsXzRD8aQlG6fFuOEPWkcISqE',
  authDomain: 'mov-03.firebaseapp.com',
  projectId: 'mov-03',
  storageBucket: 'mov-03.appspot.com',
  messagingSenderId: '991697672523',
  appId: '1:991697672523:web:ceab4511e2cb2c105a70ce',
  measurementId: 'G-SX8X4MVHF4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
