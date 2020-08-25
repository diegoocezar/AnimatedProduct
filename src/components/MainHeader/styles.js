import {StyleSheet, Dimensions} from 'react-native';

const HEADER_FONT_SIZE = 40;
const MAIN_HEADER_HEIGHT = 40;

export default StyleSheet.create({
  mainHeader: {
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: MAIN_HEADER_HEIGHT,
    overflow: 'hidden',
  },
  headerText: {
    top: MAIN_HEADER_HEIGHT * 2,
    letterSpacing: 3,
    fontFamily: 'Roboto-Black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: HEADER_FONT_SIZE,
    lineHeight: MAIN_HEADER_HEIGHT,
  },
  menuWrapper: {
    width: 20,
    height: 20,
    alignItems: 'flex-end',
  },
  menuFirst: {
    marginVertical: 2,
    width: '100%',
    height: 4,
    borderRadius: 2,
    backgroundColor: 'black',
  },
  menuSecond: {
    width: '70%',
    height: 4,
    borderRadius: 2,
    backgroundColor: 'black',
  },
  menuThird: {
    marginVertical: 2,
    width: '90%',
    height: 4,
    borderRadius: 2,
    backgroundColor: 'black',
  },
});
