import React from 'react';
import PropTypes from 'prop-types';
import { Easing, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import FlipView from 'react-native-flip-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  frontView: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backView: {
    flex: 1,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 40,
  },
});

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  flip = () => this.setState({ isFlipped: !this.state.isFlipped });

  renderBack = () => (
    <TouchableWithoutFeedback onPress={this.flip}>
      <View style={styles.frontView}>
        <Text style={styles.cardText}>{this.props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  renderFront = () => (
    <TouchableWithoutFeedback onPress={this.flip}>
      <View style={styles.backView}>
        <Text style={styles.cardText}>A</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  render() {
    return (
      <FlipView
        front={this.renderFront()}
        back={this.renderBack()}
        isFlipped={this.state.isFlipped}
        onFlipped={(val) => { console.log(`Flipped: ${val}`); }}
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
};

export default Card;
