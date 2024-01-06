/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
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

import { ScreenHeight, bcm, cm, unitSize, useStyle } from '../style'
import { NavParamListType } from '../Nav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
import { getMovie } from '../api';
import LinearGradient from 'react-native-linear-gradient';
// import { ParamListBase } from '@react-navigation/native';

// export const Books = [
//   {title: 'book1', des: 'this is about ...'},
//   {title: 'book2', des: 'a good book...'},
//   {title: 'manga2', des: 'pretty nice ...'}
// ]
import VectorIcon from 'react-native-vector-icons/FontAwesome6';

function App({ route, navigation }: NativeStackScreenProps<NavParamListType, 'Movie'>) {

  const { s, sc, Colors: { bg } } = useStyle()

  const { movie: initialMovie } = route.params;

  if (!initialMovie) return <></>;

  const [movie, setMovie] = useState<any>([])
  const [loading, setLoading] = useState(false)

  async function getMovieFromCloud(id: string) {
    setLoading(true)
    const mv = await getMovie(id)
    console.log('movie===>', mv)
    setMovie(mv)
    setLoading(false)
  }

  useEffect(() => {
    getMovieFromCloud(initialMovie.imdbID)
  }, [initialMovie.imdbID])

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,
      headerLeft: () =>
        <Pressable style={sc.boxLink}
          onPress={() => navigation.goBack()}>
          <VectorIcon name='angle-left' size={cm} color={'white'} />
        </Pressable>,
      headerTransparent: true,
      title: ''
    })
  }, [])

  return (
    <SafeAreaView>

      {/* <View style={sc.card}> */}

      <View
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Animated.Image
          // resizeMode={'cover'}
          source={{ uri: initialMovie.Poster }}
          style={{ width: 32 * unitSize, height: 48 * unitSize }}
          sharedTransitionTag={initialMovie.imdbID} />
      </View>
      <LinearGradient
        style={[StyleSheet.absoluteFill, { top: 20 * unitSize, height: 28 * unitSize }]}
        colors={["transparent", bg]}
      />

      {loading ?
        <ActivityIndicator />
        :
        <ScrollView style={[s.margin, { position: 'relative', top: 35 * unitSize, height: ScreenHeight - 35 * unitSize }]}>
          <Text style={s.titleText}>{movie.Title}</Text>
          <Text style={s.subTitleText}>{movie.Plot}</Text>
        </ScrollView>
      }

      {/* </View> */}


    </SafeAreaView>
  );
}

export default App;
