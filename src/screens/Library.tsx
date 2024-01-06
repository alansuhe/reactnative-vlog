/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
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

import { useStyle, cm, bcm, scm } from '../style'
import { NavParamListType } from '../Nav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerActions, ParamListBase } from '@react-navigation/native';
import { searchMovies } from '../api';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';

// export const Books = [
//   {title: 'book1', des: 'this is about ...'},
//   {title: 'book2', des: 'a good book...'},
//   {title: 'manga2', des: 'pretty nice ...'}
// ]

function App({ route, navigation }: NativeStackScreenProps<ParamListBase, 'Library'>) {

  const { s, sc, Colors: { front, sub, act, link, mid } } = useStyle()

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  async function getMoviesFromCloud() {
    setLoading(true)
    const mvs = await searchMovies()
    console.log('movies===>', mvs)
    setMovies(mvs.Search)
    setLoading(false)
  }

  useEffect(() => {
    getMoviesFromCloud()
  }, [])

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

  const renderItem = ({ item: movie }: { item: any }) =>

    <View style={{ flex: 1 }}>
      <View style={[s.row, s.box, { padding: 0, marginBottom: cm, borderRadius: cm }]}>
        <Pressable
          onPress={() => {
            navigation.navigate('Movie', { movie })
          }}>
          <Animated.Image
            source={{ uri: movie.Poster }}
            style={{ width: cm * 6, height: cm * 8, borderTopLeftRadius: cm, borderBottomLeftRadius: cm }}
            sharedTransitionTag={movie.imdbID} />
        </Pressable>
        <View style={{ flexShrink: 1, marginRight: cm }}>
          <Text style={s.titleText}>{movie.Title}</Text>
          <Text style={s.subText}>{movie.Year}</Text>
        </View>
      </View>
    </View>

  // const customTransition = SharedTransition.custom((values) => {
  //   'worklet';
  //   return {
  //     height: withSpring(values.targetHeight),
  //     width: withSpring(values.targetWidth),
  //     originX: withSpring(values.targetOriginX),
  //     originY: withSpring(values.targetOriginY),
  //   };
  // });

  return (
    <SafeAreaView style={[s.container, s.centered]}>
      {
        loading &&
        <ActivityIndicator />
      }

      <View style={{ marginHorizontal: cm }}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.imdbID}
        />
      </View>
    </SafeAreaView >
  );
}

export default App;
