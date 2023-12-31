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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

function App({ route, navigation }: NativeStackScreenProps<ParamListBase, 'Pay'>) {

  const { isDark, updateSettings } = useSettings()

  const { s, sc, Colors } = useStyle()

  const toggleTheme = () => {
    updateSettings({ isDark: !isDark })
  }

  return (
    <SafeAreaView style={[s.container, s.centered]}>

      <View style={sc.card}>
        <Text style={s.normalText}>
          请购买金币... 
        </Text>
        <Pressable style={sc.boxAct} onPress={()=>{navigation.goBack()}}>
          <Text style={s.normalText}>CLOSE</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

export default App;
