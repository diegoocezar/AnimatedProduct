import React from 'react';
import {View, Dimensions, Animated} from 'react-native';

import styles from './styles';
import data from '../../../data';

const {width, height} = Dimensions.get('window');

const CircleBackground = ({scrollX}) => {
  return (
    <View style={styles.circleWrapper}>
      {data.map(({color}, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.3, 0],
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {backgroundColor: color, opacity, transform: [{scale}]},
            ]}
          />
        );
      })}
    </View>
  );
};

export default CircleBackground;
