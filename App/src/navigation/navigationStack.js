import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import NaviTab from './navigationTab';
import BookDetailScreen from '../screen/BookDetailScreen';

const Stack = createNativeStackNavigator();

const NaviStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Main" component={NaviTab} />
        <Stack.Screen name='BookDetails' component={BookDetailScreen}/>


      </Stack.Navigator>
  );
};

export default NaviStack;
