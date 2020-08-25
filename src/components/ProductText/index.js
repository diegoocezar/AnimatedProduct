import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const ProductText = (props) => {
  return (
    <Text style={[styles.text, props.style && props.style]}>
      {props.children}
    </Text>
  );
};
export default ProductText;
