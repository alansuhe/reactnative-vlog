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

import { useStyle, cm, bcm } from '../style'
import { NavParamListType } from '../Nav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerActions, ParamListBase } from '@react-navigation/native';
import VectorIcon from 'react-native-vector-icons/FontAwesome6';
import { getMovies } from '../api';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';

// export const Books = [
//   {title: 'book1', des: 'this is about ...'},
//   {title: 'book2', des: 'a good book...'},
//   {title: 'manga2', des: 'pretty nice ...'}
// ]

function App({ route, navigation }: NativeStackScreenProps<ParamListBase, 'Library'>) {

  const { s, sc, Colors: { front, sub, act, link } } = useStyle()

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  async function getMoviesFromCloud() {
    setLoading(true)
    const mvs = await getMovies()
    console.log('movies===>', mvs)
    setMovies(mvs)
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

  const renderItem = ({ item: movie }) =>
    <View style={sc.card}>
      <View style={s.row}>
        <Pressable onPress={() => {
          navigation.navigate('Movie', { movie })
        }}>
          <Animated.Image
            source={{ uri: movie.data[0].poster }}
            // resizeMode='cover'
            style={{ width: cm * 6, height: cm * 8 }}
            sharedTransitionTag={movie.id} />
        </Pressable>
        <View>
          <Text style={s.titleText}>{movie.originalName}</Text>
          <Text style={s.subText}>{movie.data[0].description}</Text>
        </View>
      </View>
    </View>

  const customTransition = SharedTransition.custom((values) => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
      originX: withSpring(values.targetOriginX),
      originY: withSpring(values.targetOriginY),
    };
  });

  return (
    <SafeAreaView style={[s.container, s.centered]}>

      <View style={sc.card}>
        <Text style={s.titleText}>Library</Text>
        <Text style={s.subTitleText}>Sub title</Text>
      </View>

      {
        loading &&
        <ActivityIndicator />
      }

      {/* {
        movies.length > 0 &&
        <Pressable onPress={() => {
          navigation.navigate('Movie', { movie: movies[9] })
        }}>
          <Animated.Image
            source={{ uri: movies[9].data[0].poster }}
            style={{ width: cm * 6, height: cm * 8 }}
            // sharedTransitionStyle={customTransition}
            sharedTransitionTag={movies[9].id} />
        </Pressable>
      } */}

      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </SafeAreaView >
  );
}

export default App;
