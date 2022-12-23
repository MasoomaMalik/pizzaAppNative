import React, { useState } from 'react';
import {View, Text} from 'react-native';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import styles from '../styling';
import database from '@react-native-firebase/database';

function RegisterVehicle() {
    const [model,setModel]=useState({});
    let register = ()=>{
 console.log(model)
model.id=database().ref('vehicles/').push().key

 database()
        .ref(`vehicles/${model.id}`)
        .set(model)
        .then(() => {
            console.log("vehicle registered successsfully")
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
          <Text style={[styles.fs2, styles.textPrimary]}>RegisterVehicle</Text>
        </View>
        <View style={styles.p2}>
          <View style={styles.py1}>
            <MyInput label="Vehicle Name" 
            onChangeText={e=>setModel({...model,vehicleName:e})}
            />
          </View>
          <View style={styles.py1}>
            <MyInput label="Type of Vehicle"
            onChangeText={e=>setModel({...model,vehicleType:e})}
            
            />
          </View>
          <View style={styles.py1}>
            <MyInput label="No of Seats"
            onChangeText={e=>setModel({...model,noOfSeats:e})}
            
            />
          </View>
          <View style={styles.py1}>
            <MyInput label="Time"
            onChangeText={e=>setModel({...model,time:e})}
            
            />
          </View>
          <View style={styles.py1}>
            <MyInput label="Starting Destination" 
            onChangeText={e=>setModel({...model,startingDestination:e})}
            
            />
          </View>
          <View style={styles.py1}>
            <MyInput label="Ending Destination"
            onChangeText={e=>setModel({...model,endingDestination:e})}
            
            />
          </View>
          <View style={styles.py1}>
            <MyButton label="Register" 
            onPress={register}
            />
          </View>
        </View>
      </View>
    </>
  );
}
export default RegisterVehicle;
