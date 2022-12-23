import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import styles from '../styling';

function Country({navigation}) {
 
  return (
    <>
      <View>
        <Text>country</Text>
      </View>
       
    </>
  );
}

export default Country;


// <View style={styles.container}>
//             <MapView
//                 provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//                 style={styles.map}
//                 region={{
//                     latitude: 37.78825,
//                     longitude: -122.4324,
//                     latitudeDelta: 0.015,
//                     longitudeDelta: 0.0121,
//                 }}
//             >
//                 <Marker
//                     title='ABC Title'
//                     description='ABC'
//                     // image={() => <Image source={require('../assets/shadow.jpg')} style={{height: 35, width:35 }} />}
//                     coordinate={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                         latitudeDelta: 0.015,
//                         longitudeDelta: 0.0121,
//                     }}
//                 >
//                     <Image source={require('../assets/shadow.jpg')} style={{height: 35, width:35, resizeMode:"contain" }} />
//                     {/* <Image source={{ uri: '../assets/shadow.jpg' }} style={{ height: 35, width: 35 }} /> */}
//                     <Callout tooltip>
//                         <View
//                         // style={{width: 500}}
//                         >
//                             <Text>Again Title</Text>
//                         </View>
//                     </Callout>
//                 </Marker>
//             </MapView>
//         </View>