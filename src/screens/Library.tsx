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
import { DrawerActions, ParamListBase } from '@react-navigation/native';

export const Books = [
  {title: 'book1', des: 'this is about ...'},
  {title: 'book2', des: 'a good book...'},
  {title: 'manga2', des: 'pretty nice ...'}
]

function App({ route, navigation }: NativeStackScreenProps<ParamListBase, 'Library'>) {

  const { s, sc } = useStyle()

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTransparent: false,
      headerLeft: () =>
        <Pressable onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer())
        }}>
          <Text style={s.titleText}>{':'}</Text>
        </Pressable>
    })
  }, [])

  return (
    <SafeAreaView style={[s.container, s.centered]}>
      
      <View style={sc.card}>
        <Text style={s.titleText}>Library</Text>
        <Text style={s.subTitleText}>Sub title</Text>
      </View>

      {
          Books.map( (book, i) => 
          <View key={i} style={sc.card}>
            <Text style={s.titleText}>{book.title}</Text>
            <Text style={s.subText}>{book.des}</Text>
            <Pressable style={sc.boxLink} onPress={() => {
              navigation.navigate('Book', {book})
            }}>
              <Text>more</Text>
            </Pressable>
          </View>)
        }

    </SafeAreaView>
  );
}

export default App;
