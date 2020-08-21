import React from 'react';
import {isEmpty} from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from '../auth/login';

import HomeScreen from '../home';

const Stack = createStackNavigator();

const Navigation = (user) => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    
    >
      {isEmpty(user)  ? (
        <Stack.Screen name="LogIn" component={LoginScreen} options={{headerShown: false }} />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
