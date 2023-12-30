/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useLayoutEffect } from 'react';
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
import { NavParamListType } from '../Nav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const Books = [
  {title: 'book1', des: 'this is about ...'},
  {title: 'book2', des: 'a good book...'},
  {title: 'manga2', des: 'pretty nice ...'}
]

function App({ route, navigation }: NativeStackScreenProps<NavParamListType, 'Book'>) {

  const { s, sc } = useStyle()

  const { book } = route.params;

  if(!book) return <></>;

  return (
    <SafeAreaView style={[s.container, s.centered]}>
      
      <View style={sc.card}>
        <Text style={s.titleText}>{book.title}</Text>
        <Text style={s.subTitleText}>{book.des}</Text>
      </View>

    </SafeAreaView>
  );
}

export default App;
