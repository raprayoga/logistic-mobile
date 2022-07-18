import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { _getData } from 'multikurirkurir/src/stores/asyncStore';
import { setTokenBearer } from "multikurirkurir/src/services/xhr";

import MultikurirText from 'multikurirkurir/src/components/atoms/MultikurirText';
import MultikurirIcon from 'multikurirkurir/src/components/atoms/MultikurirIcon';
import BackGroundLauncher from 'multikurirkurir/src/components/atoms/BackGroundLauncher';

class Splashscreen extends Component {
  constructor(props) {
    super(props);
  }
  
  async componentDidMount() {
    const checkToken = await _getData('@token')
    if (checkToken !== null && checkToken !== '') {
      setTokenBearer()
      setTimeout(() => {
        this.props.navigation.reset({
          index: 0,
          routes: [{
            name: 'Home'
          }],
        });
      }, 2000);
    } else {
      setTimeout(() => {
        this.props.navigation.reset({
          index: 0,
          routes: [{
            name: 'Login'
          }],
        });
      }, 2000);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BackGroundLauncher styles={styles.background} children={(
          <>
            <View style={styles.wrap}>
              <MultikurirIcon styles={styles.icon} />
            </View>
            <View style={styles.wrap}>
              <MultikurirText styles={styles.text} />
            </View>
          </>
        )} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  wrap: {
    justifyContent: 'flex-end',
    flex: 1
  },
  background: {
    flex: 10,
    resizeMode: 'cover',
    height: '100%'
  },
  text: {
    textAlign: 'center',
    marginBottom: '20%',
  },
  icon: {
    alignSelf: 'center',
    width: '20%',
    height: '30%',
  }
});

export default Splashscreen;
