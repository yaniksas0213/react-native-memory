import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  photo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEFEFE',
    borderWidth: 1,
    borderColor: '#CCC',
    margin: 5,
    borderRadius: 5,
    height: '80%',
  },
  separator: {
    width: 30,
    height: 1,
    backgroundColor: '#CCC',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
