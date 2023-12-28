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
  Text,
  View,
} from 'react-native';

import { useStyle, cm, bcm, mcm, scm } from '../style'

function App(): React.JSX.Element {

  const { s, sc, Colors: { emphasis } } = useStyle()

  return (
    <SafeAreaView style={[s.container, s.centered]}>

      <View style={[sc.card, s.shadow]}>
        <Text style={s.titleText}>Home</Text>
        <Text style={s.subTitleText}>Sub title</Text>

        <Text style={s.normalText}>normal blah .....</Text>
        <Text style={s.subText}>sub text</Text>

        <View style={[s.row, { marginBottom: bcm * 2}]}>
          <Pressable style={sc.boxAct}>
            <Text style={s.normalText}>act</Text>
          </Pressable>
          <Pressable style={sc.boxLink}>
            <Text style={s.normalText}>link</Text>
          </Pressable>
        </View>
      </View>

      <>
        <Pressable style={sc.boxAct}>
          <Text style={s.normalText}>act</Text>
        </Pressable>
        <Pressable style={sc.boxLink}>
          <Text style={s.normalText}>link</Text>
        </Pressable>
        <View style={s.round}>
          <Text>R</Text>
        </View>
        <View style={sc.roundAct}>
          <Text>A</Text>
        </View>

        <Text style={s.normalText}>normal blah .....<Text style={{ color: emphasis }}>Emphasis highLight</Text></Text>
        <Text style={s.subText}>sub text</Text>
      </>

    </SafeAreaView>
  );
}

export default App;
