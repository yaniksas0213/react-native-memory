import React from 'react';
import PropTypes from 'prop-types';
import { Easing, Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import FlipView from 'react-native-flip-view';

import styles from './styles';

class Card extends React.Component {
  flip = () => {
    if (this.props.card.flipped) { return; }
    this.props.onFlip(this.props.card);
  }

  renderBack = () => (
    <TouchableWithoutFeedback onPress={this.flip}>
      <View style={[styles.cardView, styles.frontView]}>
        <Image
          style={styles.cardImage}
          source={{ uri: this.props.children }}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  renderFront = () => (
    <TouchableWithoutFeedback onPress={this.flip}>
      <View style={[styles.cardView, styles.backView]}>
        <Text style={styles.cardText}>{'⭐'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  render() {
    return (
      <FlipView
        front={this.renderFront()}
        back={this.renderBack()}
        isFlipped={this.props.card.flipped}
        flipAxis="y"
        flipEasing={Easing.out(Easing.ease)}
        flipDuration={500}
        perspective={1000}
        style={styles.container}
      />
    );
  }
}

Card.propTypes = {
  children: PropTypes.string.isRequired,
  onFlip: PropTypes.func.isRequired,
  card: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.number,
    image: PropTypes.string,
    flipped: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Card;
