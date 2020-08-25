import {StyleSheet} from 'react-native';

const DOT_SIZE = 40;

export default StyleSheet.create({
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    position: 'absolute',
    borderRadius: DOT_SIZE / 2,
    borderColor: '#bbb',
    borderWidth: 1,
  },
  paginationDotWrapper: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
});
