/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { useStyle } from './style'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'
import LibraryScreen from './screens/Library'

function App(): React.JSX.Element {

  const { NavColors, isDark } = useStyle()

  const navTheme = isDark ? DarkTheme : DefaultTheme

  const NavTheme = {
    ...navTheme,
    colors: {
      ...navTheme.colors,
      ...NavColors
    }
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={NavTheme}>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
