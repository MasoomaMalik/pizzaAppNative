import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import styles from '../styling';
import auth from '@react-native-firebase/auth';
function Login({navigation}) {
  const [model,setModel]=useState({})

  let loginUser = () => {
    auth()
      .signInWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log(res.user.uid);
        navigation.navigate('Home', res.user.uid)
        
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <View style={[styles.bgLight, styles.h100, styles.flexCenter]}>
        <Text style={[styles.textPrimary, styles.fs2]}>Login</Text>
        <View style={[styles.p2, styles.w100]}>
          <MyInput 
           onChangeText={e => setModel({...model, email: e})}
          label="Email" />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <MyInput 
           onChangeText={e => setModel({...model, password: e})}
          
          label="Password" />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <MyButton onPress={loginUser} label="Login" />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <Text style={[styles.textCenter, styles.fs4, styles.flexCenter]}>
            are You new user?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={styles.flexCenter}>
              <Text style={[styles.textCenter, styles.fs3, styles.textPrimary]}>
                Register
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
 
  );
}
export default Login;