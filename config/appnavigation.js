// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splashscreen';
import Home from '../screens/home';
import Login from '../screens/Login';
import SignUp from '../screens/signup';
import Profile from '../screens/profile'; 
import RegisterVehicle from '../screens/registervehicle';
import BookVehicle from '../screens/bookVehicle';
import GoogleMap from '../screens/googleMap';
import Country from '../screens/country';
import LiveLocation from '../screens/livelocation';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="RegisterVehicle" component={RegisterVehicle} />
        <Stack.Screen name="BookVehicle" component={BookVehicle} />
        <Stack.Screen name="GoogleMap" component={GoogleMap} />
          <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="LiveLocation" component={LiveLocation} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;