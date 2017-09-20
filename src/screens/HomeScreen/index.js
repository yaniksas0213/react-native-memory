import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import SelectPhotos from '../../components/SelectPhotos';
import styles from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const N_PHOTOS = 8;
    return (
      <Grid>
        <Row size={1}>
          <Col>
            <View style={styles.text}>
              <Text style={styles.title}>Memory Game</Text>
              <Text style={styles.caption}>
                Select {N_PHOTOS} images to play!
              </Text>
            </View>
          </Col>
        </Row>
        <Row size={3}>
          <SelectPhotos nPhotos={N_PHOTOS} />
        </Row>
        <Row size={1}>
          <View style={styles.playButton}>
            <Button
              title="Play!"
              onPress={() => this.props.navigation.navigate('Cards')}
            />
          </View>
        </Row>
      </Grid>
    );
  }
}

export default HomeScreen;
