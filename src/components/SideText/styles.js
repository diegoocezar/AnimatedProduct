import {StyleSheet} from 'react-native';

const TEXT_WRAPPER_SIZE = 20;
const LOGO_SIZE = 50;
export default StyleSheet.create({
  textWrapper: {
    height: LOGO_SIZE,
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [
      {translateY: TEXT_WRAPPER_SIZE * 6},
      {translateX: TEXT_WRAPPER_SIZE * 2},
      {rotateZ: '90deg'},
    ],
    overflow: 'hidden',
  },
  text: {
    fontSize: TEXT_WRAPPER_SIZE,
    lineHeight: TEXT_WRAPPER_SIZE,
    marginRight: 10,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
});
