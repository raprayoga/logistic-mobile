import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import HOList from 'multikurirkurir/src/components/organisms/HOList';
import HubName from 'multikurirkurir/src/components/organisms/HubName';

export default class HOPackageList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HubName />
        <HOList />
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