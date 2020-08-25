import React from 'react';
import {View, Dimensions, Animated, Image} from 'react-native';

import styles from './styles';

import ProductText from './../ProductText';
import data from './../../../data';
const {width} = Dimensions.get('window');
const TEXT_WRAPPER_SIZE = 50;

const SideText = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TEXT_WRAPPER_SIZE, 0, -TEXT_WRAPPER_SIZE],
  });
  return (
    <View style={styles.textWrapper}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map(({store, logo}, index) => (
          <View
            key={index}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <ProductText style={styles.text}>{store}</ProductText>
            <Image source={logo} style={styles.logo} />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

export default SideText;
