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
    return (
      <View style={styles.container}>
            <Text style={styles.title}> PUSH NOTIFICATION</Text>
            <Text style={styles.subtitle}>GET A NOTIFICATION FROM FIREBASE</Text>
          </View>
        );
      };

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#928DAB',
          padding: 20,
        },
        title: {
          fontSize:30,
          fontWeight: 'bold',
          color: '#1F1C2C',
          marginBottom: 10,
          textAlign: 'center',
        },
        subtitle: {
          fontSize: 16,
          color: '#1F1C2C',
          textAlign: 'center',
        }
  });


export default App;