import React, { Component } from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ScanBarcode extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },
      flashMode: {
        mode: RNCamera.Constants.FlashMode.off,
        turnON: false,
        styleColor: 'white',
        styleBackground: 'black'
      }
    };

    if (Dimensions.get('window').height < 500) this.frameScanner = '53%'
    else if (Dimensions.get('window').height >= 500 && Dimensions.get('window').height < 700) this.frameScanner = '64%'
    else this.frameScanner = '75%'
  }

  onBarCodeRead(scanResult) {
    console.warn(scanResult.type);
    console.warn(scanResult.data);
    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.barcodeCodes.push(scanResult.data);
        console.warn('onBarCodeRead call');
      }
    }
    return;
  }

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
            defaultTouchToFocus
            flashMode={this.state.flashMode.mode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            style={styles.preview}
            type={this.state.camera.type}
        >
        </RNCamera>
        <View style={[styles.overlay, styles.topOverlay, {paddingTop: this.frameScanner}]}>
          <Text style={styles.scanScreenMessage}>Mohon scan barcode disini</Text>
        </View>
        <View style={[styles.overlay, styles.bottomOverlay, { paddingTop: this.frameScanner }]}></View>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => { this.turnFlash() }} style={{ backgroundColor: this.state.flashMode.styleBackground, ...styles.capture }}>
            <Icon name="flashlight" size={50} color={this.state.flashMode.styleColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  topOverlay: {
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
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
};