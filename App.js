import React from 'react';
import { View, StyleSheet } from 'react-native';

import CardList from './src/components/CardList';
import CameraBtn from './src/components/CameraBtn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const cards = [
    { label: '🐶' },
    { label: '🐱' },
    { label: '🦊' },
    { label: '🐸' },
    { label: '🐧' },
    { label: '🐔' },
    { label: '🐵' },
    { label: '🦄' },
  ];

  return (
    <View style={styles.container}>
      <CardList cards={cards} />
      <CameraBtn />
    </View>
  );
};

export default App;
