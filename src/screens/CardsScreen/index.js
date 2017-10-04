import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CardList from '../../components/CardList';
import styles from './styles';

class CardsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Memory',
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

  constructor(props) {
    super(props);

    const sincgleCards = this.props.navigation.state.params.photos.map((photo, i) => (
      { label: i, image: photo, flipped: false }
    ));

    const cards = [...sincgleCards, ...sincgleCards]
      .sort(() => (Math.round(Math.random())))
      .map((card, i) => ({ ...card, id: i }));

    const columns = Math.ceil(Math.sqrt(cards.length));
    const rows = cards.length / columns;

    this.state = {
      cards,
      flipping: [],
      columns,
      rows,
    };
  }

  hideCards = (cardA, cardB) => {
    return this.state.cards.map(
      (c) => {
        const flippedCard = { ...c };
        if (c.id === cardA.id || c.id === cardB.id) {
          flippedCard.flipped = false;
        }
        return flippedCard;
      },
    );
  }

  showCard = (card) => {
    return this.state.cards.map(
      (c) => {
        const flippedCard = { ...c };
        if (c.id === card.id) {
          flippedCard.flipped = true;
        }
        return flippedCard;
      },
    );
  }
  flipCard = (card) => {
    let newCards = [];
    if (this.state.flipping.length === 1) {
      console.log('SECOND FLIP CARD');
      const flippingCard = this.state.flipping[0];
      if (card.label === flippingCard.label) {
        console.log('FOUND A PAIR');
        newCards = this.showCard(card);
      } else {
        console.log('WRONG PAIR');
        newCards = this.showCard(card);
        setTimeout(() => {
          newCards = this.hideCards(card, flippingCard);
          this.setState({ flipping: [], cards: newCards });
        }, 2500);
      }
      this.setState({ flipping: [], cards: newCards });
    } else {
      console.log('FIRST CARD FLIP');
      newCards = this.showCard(card);
      this.setState({ flipping: [card], cards: newCards });
    }
    console.log("NEW CARDS", newCards);
  }

  render() {
    console.log("RENDER CARDS", this.state.cards);
    console.log("RENDER FLIPPING", this.state.flipping);
    return (
      <View style={styles.container}>
        <CardList onFlip={this.flipCard} rows={this.state.rows} columns={this.state.columns} cards={this.state.cards} />
      </View>
    );
  }
}

export default CardsScreen;
