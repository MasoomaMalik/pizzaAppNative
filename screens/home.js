import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import styles from '../styling';

function Home({navigation}) {
  let registerVehcile = () => {
    //conditions to check if user can register or not
    navigation.navigate('RegisterVehicle');
  };
  let booking=()=>{
    navigation.navigate("bookVehicle")
  };
  let gotoMap=()=>{
    navigation.navigate("LiveLocation")
  };
  return (
    <>
      <View>
        <Text>Home</Text>
      </View>
      {/* <View style={styles.p2}>
        <MyButton onPress={registerVehcile} label="Register Vehicle" />
      </View>
      <View style={styles.p2}>
        <MyButton onPress={booking} label="Book Vehicle" />
      </View> */}
      <View style={styles.p2}>
        <MyButton onPress={gotoMap} label="LiveLocation" />
      </View>
    </>
  );
}
export default Home;
