'use strict';
import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { RNCamera } from 'react-native-camera';

export default class TakePicture extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flashMode: {
        mode: RNCamera.Constants.FlashMode.off,
        turnON: false,
        styleColor: 'white',
        styleBackground: 'black'
      }
    };
  }

  takePicture = async () => {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    this.props.onPicture(data);
  };

  turnFlash = () => {
    if (this.state.flashMode.turnON) {
      this.setState({
        flashMode: {
          mode: RNCamera.Constants.FlashMode.off,
          turnON: false,
          styleColor: 'white',
          styleBackground: 'black'
        }
      })
      console.log('OFF')
    } else {
      this.setState({
        flashMode: {
          mode: RNCamera.Constants.FlashMode.torch,
          turnON: true,
          styleColor: 'blue',
          styleBackground: 'white'
        }
      })
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          flashMode={this.state.flashMode.mode}
        />
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => { this.turnFlash() }} style={{ backgroundColor: this.state.flashMode.styleBackground, ...styles.capture }}>
            <Icon name="flashlight" size={50} color={this.state.flashMode.styleColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={{ backgroundColor: 'black', ...styles.capture }}>
            <Icon name="camera" size={50} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'relative'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    color: 'white',
    opacity: 0.5,
    borderRadius: 35,
    width: 70,
    height: 70,
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});