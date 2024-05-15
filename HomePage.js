import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Settings from './Settings';
import CheckAvailability from './CheckAvailability';
import BookNow from './BookNow';
import Wallet from './Wallet';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="CheckAvailability" component={CheckAvailability} />
        <Drawer.Screen name="BookNow" component={BookNow} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}