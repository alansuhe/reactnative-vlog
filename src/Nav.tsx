/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { useStyle } from './style'
import { DarkTheme, DefaultTheme, NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'
import LibraryScreen from './screens/Library'
import MovieScreen from './screens/Movie'
import PayScreen from './screens/Pay'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VectorIcon from 'react-native-vector-icons/FontAwesome6';

export interface NavParamListType extends ParamListBase {
  Home: undefined
  Library: undefined
  Settings: undefined
  Movie: {
    movie?: any
  }
  Pay: undefined
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

  const HomeNav = createNativeStackNavigator<NavParamListType>()
  function HomeStack() {
    return (
      <HomeNav.Navigator screenOptions={{
      }}>
        <HomeNav.Screen name="Home" component={HomeScreen} />
        <HomeNav.Screen name="Pay" component={PayScreen} options={{ presentation: 'containedModal'}} />
      </HomeNav.Navigator>
    )

  }

  const LibraryNav = createNativeStackNavigator<NavParamListType>()
  function LibraryStack() {
    return (
      <LibraryNav.Navigator screenOptions={{
      }}>
        <LibraryNav.Screen name="Library" component={LibraryScreen} />
        <LibraryNav.Screen name="Movie" component={MovieScreen} />
      </LibraryNav.Navigator>
    )

  }

  const Tab = createBottomTabNavigator();
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName='HomeStack'>
        <Tab.Screen name="LibraryStack" component={LibraryStack} 
        options={{ headerShown: false, 
        tabBarIcon: ({ color, size, focused })=><VectorIcon name='book' color={color} size={size} />}} />
        <Tab.Screen name="HomeStack" component={HomeStack} 
        options={{ headerShown: false, 
          tabBarIcon: ({ color, size, focused })=><VectorIcon name='bowling-ball' color={color} size={size} />}} />
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
          name={'tabs'}
          component={BottomTabNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
