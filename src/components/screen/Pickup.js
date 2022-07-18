import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import PickupList from 'multikurirkurir/src/components/organisms/PickupList';
import Search from 'multikurirkurir/src/components/organisms/Search';

export default class Pickup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <PickupList />
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