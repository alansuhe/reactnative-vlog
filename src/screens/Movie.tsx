/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useLayoutEffect } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { cm, useStyle } from '../style'
import { NavParamListType } from '../Nav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
// import { ParamListBase } from '@react-navigation/native';

// export const Books = [
//   {title: 'book1', des: 'this is about ...'},
//   {title: 'book2', des: 'a good book...'},
//   {title: 'manga2', des: 'pretty nice ...'}
// ]

function App({ route, navigation }: NativeStackScreenProps<NavParamListType, 'Movie'>) {

  const { s, sc } = useStyle()

  const { movie } = route.params;

  if (!movie) return <></>;

  return (
    <SafeAreaView style={[s.container, s.centered]}>

      {/* <View style={sc.card}> */}
      <Pressable onPress={() => navigation.goBack()}>
        <Animated.Image
          // resizeMode={'cover'}
          source={{ uri: movie.data[0].poster }}
          style={{ width: 12*cm, height: 16* cm }}
          sharedTransitionTag={movie.id} />
        <Text style={s.titleText}>{movie.originalName}</Text>
        <Text style={s.subTitleText}>{movie.data[0].description}</Text>
      </Pressable>
      {/* </View> */}


    </SafeAreaView>
  );
}

export default App;
