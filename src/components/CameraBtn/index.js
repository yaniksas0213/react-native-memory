import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class CameraBtn extends React.Component {
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera"
          onPress={this.pickImageFromCamera}
        />
        <Button
          title="Pick an image from image library"
          onPress={this.pickImageFromLibrary}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        }
      </View>
    );
  }
}
