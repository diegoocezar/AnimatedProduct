import React from 'react';
import {View, Dimensions, Animated, Text} from 'react-native';

import data from '../../../data';

import styles from './styles';

const MAIN_HEADER_HEIGHT = 40;
const {width, height} = Dimensions.get('window');

const MainHeader = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [MAIN_HEADER_HEIGHT, 0, -MAIN_HEADER_HEIGHT],
  });

  return (
    <View style={styles.mainHeader}>
      <View style={styles.textWrapper}>
        <Animated.View style={{transform: [{translateY}]}}>
          {data.map(({model}, index) => {
            return (
              <Text key={index} style={styles.headerText}>
                {model}
              </Text>
            );
          })}
        </Animated.View>
      </View>

      <View style={styles.menuWrapper}>
        <View style={styles.menuFirst} />
        <View style={styles.menuSecond} />
        <View style={styles.menuThird} />
      </View>
    </View>
  );
};

export default MainHeader;
