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
  StatusBar,
  Text,
  View,
} from 'react-native';

import { s, sc, Colors } from './Style'

const { bg, front, mid, sub } = Colors

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={s.container}>
      <StatusBar />

      <View style={[s.centered, { flex: 1 }]}>
        <View style={sc.card}>
          <Text style={s.titleText}>Navigator</Text>
          <Text style={s.subTitleText}>Sub title text</Text>
          <Text style={s.normalText}>blah blah blah blahblah blahblah blahblah blah</Text>
          <Text style={s.subText}>sub text</Text>

          <View style={s.row}>
            <Pressable style={sc.buttonLink}>
              <Text style={{ color: 'white' }}>link to X</Text>
            </Pressable>
            <Pressable style={sc.buttonAct}>
              <Text style={{ color: 'white' }}>link to X</Text>
            </Pressable>
            <Pressable style={sc.button}>
              <Text style={{ color: front }}>do it ...</Text>
            </Pressable>

          </View>
        </View>

        <>
          <Text style={s.normalText}>blahblah ... text</Text>
          <Text style={s.subText}>sub l.....</Text>

          <View style={s.row}>
            <Pressable style={sc.buttonLink} onPress={() => { }}>
              <Text style={{ color: 'white' }}>link to X</Text>
            </Pressable>
            <Pressable style={sc.buttonAct} onPress={() => { }}>
              <Text style={{ color: 'white' }}>link to X</Text>
            </Pressable>
            <Pressable style={sc.button}>
              <Text style={{ color: front }}>do it ...</Text>
            </Pressable>
          </View>
        </>

      </View>

    </SafeAreaView>
  );
}

export default App;
