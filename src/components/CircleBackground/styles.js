import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.5;

export default StyleSheet.create({
  circleWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '25%',
  },
});
