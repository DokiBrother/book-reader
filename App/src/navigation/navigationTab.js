import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import CategoryScreen from '../screen/CategoryScreen';
import { Icon } from '@rneui/base';
import HistoryScreen from '../screen/HistoryScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SettingScreen from '../screen/SettingScreen';

const Tab = createMaterialBottomTabNavigator();

const NaviTab = () => {
  return (
      <Tab.Navigator
        activeColor="white"
        inactiveColor="#006400"
        barStyle={{
          height: 60,
          position: 'absolute',
          backgroundColor: '#70e000',
          margin: 20,
          borderColor: '#70e000',
          borderWidth: 5,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        screenOptions={{
            headerShown: false,
        }}
      >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarVisible: 'false',
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <Icon name='home' size={24} color={color} />
              )
            }}
        />
        <Tab.Screen
            name="Category"
            component={CategoryScreen}
            options={{
              tabBarVisible: 'false',
              tabBarLabel: 'Category',
              tabBarIcon: ({color}) => (
                <Icon name='list' size={24} color={color} />
              )
            }}
        />
        <Tab.Screen
            name="History"
            component={HistoryScreen}
            options={{
              tabBarVisible: 'false',
              tabBarLabel: 'History',
              tabBarIcon: ({color}) => (
                <Icon name='history' size={24} color={color} />
              )
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarVisible: 'false',
              tabBarLabel: 'Profile',
              tabBarIcon: ({color}) => (
                <Icon name='person' size={24} color={color} />
              )
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              tabBarVisible: 'false',
              tabBarLabel: 'Settings',
              tabBarIcon: ({color}) => (
                <Icon name='settings' size={24} color={color} />
              )
            }}
        />
      </Tab.Navigator>
  );
};

export default NaviTab;
