import React, { Component } from 'react'

import {View, StyleSheet, Dimensions} from 'react-native';

import MultikurirText from 'multikurirkurir/src/components/atoms/MultikurirText';
import MultikurirIcon from 'multikurirkurir/src/components/atoms/MultikurirIcon';
import BackGroundLauncher from 'multikurirkurir/src/components/atoms/BackGroundLauncher';

import FormLogin from 'multikurirkurir/src/components/organisms/FormLogin';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: '',
        rememberMe: null,
        force: null
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BackGroundLauncher styles={styles.background} children={(
          <>
            <View style={styles.wrap}>
              <MultikurirIcon styles={styles.icon} />
              <MultikurirText styles={styles.text} />
            </View>
            <View style={{ flex: 3, justifyContent: 'flex-end' }}>
              <FormLogin />
            </View>
          </>
        )} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1
  },
  background: {
    flex: 10,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height
  },
  text: {
    textAlign: 'left',
    marginTop: '5%',
  },
  icon: {
    alignSelf: 'flex-start',
    width: 30,
    height: 60,
    margin: '4%'
  }
});