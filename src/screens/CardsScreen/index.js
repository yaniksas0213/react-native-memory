import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CardList from '../../components/CardList';
import styles from './styles';

class CardsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Play!',
  };

  static defaultProps = {
    navigation: {
      state: {
        params: {
          photos: [],
        },
      },
    },
  }

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          photos: PropTypes.arrayOf(PropTypes.string),
        }),
      }),
    }).isRequired,
  }

  render() {
    const { navigation: { state: { params } } } = this.props;
    const cards = params.photos.map((photo, i) => (
      { label: i, image: photo }
    ));

    return (
      <View style={styles.container}>
        <CardList cards={cards} />
      </View>
    );
  }
}

export default CardsScreen;
