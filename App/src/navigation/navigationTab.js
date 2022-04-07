import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import CategoryScreen from '../screen/CategoryScreen';


const Tab = createBottomTabNavigator();

const NaviTab = () => {
  return (
      <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
        />
        <Tab.Screen
            name="Category"
            component={CategoryScreen}
        />
        
      </Tab.Navigator>
  );
};

export default NaviTab;
