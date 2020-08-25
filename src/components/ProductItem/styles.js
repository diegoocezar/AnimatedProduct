import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  itemWrapper: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: 'contain',
    flex: 1,
  },
  textWrapper: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.7,
    marginRight: 10,
  },
  itemTitle: {
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 5,
  },
  itemDescription: {
    color: '#ccc',
    textAlign: 'left',
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
});
