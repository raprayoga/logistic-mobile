import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Pickup from 'multikurirkurir/src/components/screen/Pickup';
import Delivery from 'multikurirkurir/src/components/screen/Delivery';
import ScanBarcode from 'multikurirkurir/src/components/screen/ScanBarcode';
import HandsOver from 'multikurirkurir/src/components/screen/HandsOver';

const Tab = createMaterialBottomTabNavigator();

export default function MainMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Pickup"
      activeColor="white"
      barStyle={{ backgroundColor: 'tomato' }}
      shifting={true}
    >
      <Tab.Screen
        name="Pickup"
        component={Pickup}
        options={{
          tabBarLabel: 'Pickup',
          tabBarColor: '#28a745',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="package-down" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarLabel: 'Delivery',
          tabBarColor: '#26b4ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="package-up" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hands Over"
        component={HandsOver}
        options={{
          tabBarLabel: 'Hands Over',
          tabBarColor: '#B91C1C',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="transfer" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={ScanBarcode}
        options={{
          tabBarLabel: 'History',
          tabBarColor: '#20c997',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Auto Scan"
        component={ScanBarcode}
        options={{
          tabBarLabel: 'Auto Scan',
          tabBarColor: '#6c757d',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="barcode-scan" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}