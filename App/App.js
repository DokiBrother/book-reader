import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import NaviStack from './src/navigation/navigationStack';
import NaviTab from './src/navigation/navigationTab';

const App = () => {
  return (
    <NavigationContainer>
      <NaviStack/>
    </NavigationContainer>
  );
};


export default App;
