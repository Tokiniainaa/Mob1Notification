/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View, Text ,Button,StyleSheet} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

  const getToken = async () => {
      const token = await messaging().getToken();
      console.log('Token FCM:', token);
  };
    useEffect(() => {
       requestUserPermission();
       getToken();
  }, []);
}

export default App;