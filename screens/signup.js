import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../styling';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';
import database from '@react-native-firebase/database';
function Signup({navigation}) {
  const [model,setModel]=useState({})
  let signupuser = ()=>{
    console.log(model)
    auth().createUserWithEmailAndPassword(model.email,model.password)
    .then((res)=>{console.log(res);
    
      console.log(res.user.uid);
      database()
        .ref(`appusers/${res.user.uid}`)
        .set(model)
        .then((res) => {
          navigation.navigate('Login', res.user.uid);})
          .catch(dbError => {
            console.log(dbError);
          });


    })
    .catch((err)=>{console.log(err)})
  }
  return (
    <>
    <View style={[styles.h100, styles.flexCenter, styles.bgLight]}>
      <Text>SignUp</Text>
      <View style={[styles.p2, styles.w100]}>
        <MyInput
          onChangeText={e => setModel({...model, userName: e})}
          label="User Name"
        />
      </View>
      <View style={[styles.p2, styles.w100]}>
        <MyInput
          onChangeText={e => setModel({...model, email: e})}
          label="Email"
        />
      </View>
      <View style={[styles.p2, styles.w100]}>
        <MyInput
          onChangeText={e => setModel({...model, password: e})}
          label="Password"
        />
      </View>
      <View style={[styles.p2, styles.w100]}>
        <MyButton onPress={signupuser} label="Sign Up" />
      </View>
    </View>
  </>
  );
}
export default Signup;