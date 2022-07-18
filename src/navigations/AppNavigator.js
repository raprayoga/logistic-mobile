import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {FONTS} from 'multikurirkurir/src/constants/theme';
import Splashscreen from 'multikurirkurir/src/components/screen/Splash/SplashScreen';
import Login from 'multikurirkurir/src/components/screen/Auth/Login';
import LupaPassword from 'multikurirkurir/src/components/screen/Auth/LupaPassword';
import Profile from 'multikurirkurir/src/components/screen/Profile';
import DetailPackagePickup from 'multikurirkurir/src/components/screen/DetailPackagePickup';
import DetailPackageDelivery from 'multikurirkurir/src/components/screen/DetailPackageDelivery';
import DetailPackageHO from 'multikurirkurir/src/components/screen/DetailPackageHO';
import HOPackageList from 'multikurirkurir/src/components/screen/HOPackageList';
import ScanBarcode from 'multikurirkurir/src/components/screen/ScanBarcode';
import AccessPicture from 'multikurirkurir/src/components/screen/AccessPicture';
import MainMenu from './MainMenu';


const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const navigation = useNavigation()

  return (
      <Stack.Navigator initialRouteName="Splashscreen">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Splashscreen"
            component={Splashscreen}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="LupaPassword"
            component={LupaPassword}
          />
          <Stack.Screen
            name="ScanBarcode"
            component={ScanBarcode}
          />
          <Stack.Screen
            name="TakePicture"
            component={AccessPicture}
          />
          </Stack.Group>
        <Stack.Screen
          name="Home"
          component={MainMenu}
          options={{
            title: 'Multikurir',
            headerTitleStyle: {
              ...FONTS.mukufont,
              fontSize: 23,
              color: '#f3f3f3'
            },
            headerStyle: {
              backgroundColor: '#83ccff',
            },
            headerRight: () => (
              <>
                <TouchableOpacity
                  style={{marginRight: 20}}
                  onPress={() => navigation.navigate('Pickup')}>
                  <MaterialCommunityIcons name="bell" color="white" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <MaterialCommunityIcons name="account" color="white" size={25} />
                </TouchableOpacity>
              </>
            ),
          }}
      />
      <Stack.Group
        screenOptions={{
          headerTitleStyle: {
            ...FONTS.mukufont,
            fontSize: 23,
            color: '#f3f3f3'
          },
          headerStyle: {
            backgroundColor: '#83ccff',
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{marginRight: 20}}
              onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="arrow-left" color="white" size={25} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => navigation.navigate('Pickup')}>
                <MaterialCommunityIcons name="bell" color="white" size={25} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}>
                <MaterialCommunityIcons name="account" color="white" size={25} />
              </TouchableOpacity>
            </>
          )
        }}
      >
        <Stack.Screen
          name="DetailPackagePickup"
          component={DetailPackagePickup}
          options={{
            title: 'Detail Pickup'
          }}
        />
        <Stack.Screen
          name="DetailPackageDelivery"
          component={DetailPackageDelivery}
          options={{
            title: 'Detail Delivery'
          }}
        />
        <Stack.Screen
          name="HOPackageList"
          component={HOPackageList}
          options={{
            title: 'Detail Hands Over'
          }}
        />
        <Stack.Screen
          name="DetailPackageHO"
          component={DetailPackageHO}
          options={{
            title: 'Detail Package HO'
          }}
        />
      </Stack.Group>
      <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  );
}