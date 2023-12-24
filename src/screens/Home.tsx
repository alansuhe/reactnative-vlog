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
        <Text style={s.titleText}>Home</Text>
        <Text style={s.subTitleText}>Sub title</Text>

        <Text style={s.normalText}>normal blah .....</Text>
        <Text style={s.subText}>sub text</Text>

        <View style={s.row}>
          <Pressable style={sc.buttonAct}>
            <Text style={s.normalText}>act</Text>
          </Pressable>
          <Pressable style={sc.buttonLink}>
            <Text style={s.normalText}>link</Text>
          </Pressable>
        </View>
      </View>

      <View style={s.row}>
        <Pressable style={sc.buttonAct}>
          <Text style={s.normalText}>act</Text>
        </Pressable>
        <Pressable style={sc.buttonLink}>
          <Text style={s.normalText}>link</Text>
        </Pressable>

        <Text style={s.normalText}>normal blah .....</Text>
        <Text style={s.subText}>sub text</Text>
      </View>

    </SafeAreaView>
  );
}

export default App;
