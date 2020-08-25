/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {StyleSheet, View, FlatList, Animated} from 'react-native';

import data from './data';
import ProductText from './src/components/ProductText';
import MainHeader from './src/components/MainHeader';
import ProductItem from './src/components/ProductItem';
import CircleBackground from './src/components/CircleBackground';
import Pagination from './src/components/Pagination';
import SideText from './src/components/SideText';

const FONT_SIZE = 40;

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.main}>
      <CircleBackground scrollX={scrollX} />

      <MainHeader scrollX={scrollX} />

      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({item, index}) => (
          <ProductItem {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
      <ProductText style={styles.rotateText}>Crossfit</ProductText>
      <SideText scrollX={scrollX} />
      <Pagination scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  rotateText: {
    position: 'absolute',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
    left: 10,
    bottom: 10,
    transform: [{translateX: -75}, {translateY: -75}, {rotateZ: '-90deg'}],
  },
});

export default App;
