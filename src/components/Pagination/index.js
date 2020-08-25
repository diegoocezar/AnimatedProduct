import React from 'react';
import {View, Dimensions, Animated} from 'react-native';

import styles from './styles';
import data from '../../../data';

const {width} = Dimensions.get('window');
const DOT_SIZE = 40;

const Pagination = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <View style={styles.pagination}>
      <Animated.View
        style={[styles.paginationIndicator, {transform: [{translateX}]}]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotWrapper}>
            <View
              style={[styles.paginationDot, {backgroundColor: item.color}]}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Pagination;
