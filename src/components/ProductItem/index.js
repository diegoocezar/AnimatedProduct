import React from 'react';
import {View, Image, Dimensions, Animated, Text} from 'react-native';

import styles from './styles';

const {width} = Dimensions.get('window');

const ProductItem = ({image, title, description, index, scrollX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [
    (index - 0.6) * width,
    index * width,
    (index + 0.6) * width,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXTitle = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.4, 0, -width * 0.4],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.8, 0, -width * 0.8],
  });
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.itemWrapper}>
      <Animated.Image
        source={image}
        style={[styles.itemImage, {transform: [{scale}]}]}
      />
      <View style={styles.textWrapper}>
        <Animated.Text
          style={[
            styles.itemTitle,
            {opacity, transform: [{translateX: translateXTitle}]},
          ]}>
          {title}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.itemDescription,
            {
              opacity,
              transform: [{translateX: translateXDescription}],
            },
          ]}>
          {description}
        </Animated.Text>
      </View>
    </View>
  );
};

export default ProductItem;
