import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import styles from '../styling';
import database from '@react-native-firebase/database';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
function GoogleMap() {
    const styles = StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 400,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
       });

  return (
    <>

<View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>




    </>
  );
}
export default GoogleMap;
