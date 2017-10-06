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
      navigate: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          photos: PropTypes.arrayOf(PropTypes.string),
        }),
      }),
    }).isRequired,
  }

  constructor(props) {
    super(props);

    const singleCards = this.props.navigation.state.params.photos.map((photo, i) => (
      { label: i, image: photo, flipped: false }
    ));

    const cards = [...singleCards, ...singleCards]
      .sort(() => Math.round(Math.random()))
      .map((card, i) => ({ ...card, id: i }));

    const columns = Math.ceil(Math.sqrt(cards.length));
    const rows = cards.length / columns;

    this.state = {
      cards,
      flipping: [],
      columns,
      rows,
      win: false,
    };
  }

  hide = card => ({ ...card, flipped: false });

  show = card => ({ ...card, flipped: true });

  hideCards = (cardA, cardB) =>
    this.state.cards
      .map(c => (c.id === cardA.id || c.id === cardB.id ? this.hide(c) : { ...c }));

  showCard = card =>
    this.state.cards
      .map(c => (c.id === card.id ? this.show(c) : { ...c }));

  rollback = (cardA, cardB) =>
    this.setState({ flipping: [], cards: this.hideCards(cardA, cardB), win: false });

  resetGame = () => {
    this.props.navigation.navigate('Home', { photos: [] });
  }

  flipCard = (card) => {
    let win = false;
    if (this.state.flipping.length === 0) {
      this.setState({ flipping: [card], cards: this.showCard(card), win });
    } else {
      const flippingCard = this.state.flipping[0];
      if (card.label !== flippingCard.label) {
        setTimeout(() => this.rollback(card, flippingCard), 2500);
      } else {
        win = this.state.cards.filter(c => !c.flipped).length === 1;
      }
      this.setState({ flipping: [], cards: this.showCard(card), win });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CardList onFlip={this.flipCard} resetGame={this.resetGame} win={this.state.win} rows={this.state.rows} columns={this.state.columns} cards={this.state.cards} win={this.state.win}/>
      </View>
    );
  }
}

export default CardsScreen;
