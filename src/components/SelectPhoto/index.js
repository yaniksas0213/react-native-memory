import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default class SelectPhoto extends React.Component {
  state = {
    image: null,
  };

  pickImageFromLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  pickImageFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.photo}>
        {image ?
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
          :
          <View>
            <TouchableWithoutFeedback onPress={this.pickImageFromCamera}>
              <Ionicons name="md-camera" size={32} />
            </TouchableWithoutFeedback>
            <View style={styles.separator} />
            <TouchableWithoutFeedback onPress={this.pickImageFromLibrary}>
              <Ionicons name="md-images" size={32} />
            </TouchableWithoutFeedback>
          </View>
        }
      </View>
    );
  }
}
