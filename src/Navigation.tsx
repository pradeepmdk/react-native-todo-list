import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import {useAppSelector} from './store';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
const Stack = createStackNavigator();

export default function Navigation() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator
            initialRouteName={'Home'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}
