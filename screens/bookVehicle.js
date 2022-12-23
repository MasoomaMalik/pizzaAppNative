import React, { useState } from 'react';
import {View, Text} from 'react-native';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import styles from '../styling';
import database from '@react-native-firebase/database';

function BookVehicle() {
    const [model,setModel]=useState({});
    let bookVehicle = ()=>{
 console.log(model)
model.id=database().ref('vehicles/').push().key

 database()
        .ref(`vehicles/${model.id}`)
        .set(model)
        .then(() => {
            console.log("vehicle booked successsfully")
        //   navigation.navigate('Login', res.user.uid);
        })
          .catch(dbError => {
            console.log(dbError);
          });

    }
  return (
    <>
      <View style={[styles.h100, styles.bgLight]}>
        <View style={styles.p2}>
          <Text style={[styles.fs2, styles.textPrimary]}>Book Vehicle</Text>
        </View>
        <View style={styles.p2}>
          <View style={styles.py1}>
            <MyButton label="Book Vehicle" 
            onPress={bookVehicle}
            />
          </View>
        </View>
      </View>
    </>
  );
}
export default BookVehicle;
