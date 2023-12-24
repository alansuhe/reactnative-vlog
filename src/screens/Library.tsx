/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useStyle } from '../style'

function App(): React.JSX.Element {

  const { s, sc } = useStyle()

  return (
    <SafeAreaView style={[s.container, s.centered]}>
      
      <View style={sc.card}>
        <Text style={s.titleText}>Library</Text>
        <Text style={s.subTitleText}>Sub title</Text>

      </View>

    </SafeAreaView>
  );
}

export default App;
