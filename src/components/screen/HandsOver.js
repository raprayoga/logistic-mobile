import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import HOBatchList from 'multikurirkurir/src/components/organisms/HOBatchList';

export default class HandsOver extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HOBatchList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});