import React from 'react';
import { View } from 'react-native';

import CardList from '../../components/CardList';
import styles from './styles';

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

class CardsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Play!',
  };
  render() {
    return (
      <View style={styles.container}>
        <CardList cards={cards} />
      </View>
    );
  }
}

export default CardsScreen;
