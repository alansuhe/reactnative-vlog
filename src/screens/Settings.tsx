/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useSettings } from '../store';

import { useStyle } from '../style'
import { DrawerContentComponentProps } from '@react-navigation/drawer';

function App(props: DrawerContentComponentProps) {

  const { isDark, updateSettings } = useSettings()

  const { s, sc, Colors } = useStyle()

  const toggleTheme = () => {
    updateSettings({ isDark: !isDark })
  }

  return (
    <SafeAreaView style={[s.container, s.centered]}>

      <View style={sc.card}>
        <Text style={s.titleText}>Settings</Text>
        <Text style={s.subTitleText}>Sub title</Text>
        <Switch onValueChange={toggleTheme} value={isDark} />

        <Text style={s.normalText}>{isDark ? '深色' : '浅色'}</Text>
      </View>

    </SafeAreaView>
  );
}

export default App;
