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
import BookScreen from './screens/Book'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NavParamListType = {
  Home: any,
  Library: any,
  Settings: any,
  Book: {
    book?: any
  }
}

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

  const LibraryNav = createNativeStackNavigator()
  function LibraryStack() {
    return (
      <LibraryNav.Navigator screenOptions={{
      }}>
        <LibraryNav.Screen name="Library" component={LibraryScreen} />
        <LibraryNav.Screen name="Book" component={BookScreen} />
      </LibraryNav.Navigator>
    )

  }

  const Tab = createBottomTabNavigator();
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="LibraryStack" component={LibraryStack} options={{ headerShown: false}} />
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    )
  }

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer theme={NavTheme}>
      <Drawer.Navigator
        // initialRouteName="tab"
        drawerContent={(props) => <SettingsScreen {...props} />}
        screenOptions={{
          headerShown: false,
          // title: 'vlog'
        }}>
        <Drawer.Screen
          name={'Home'}
          component={BottomTabNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
