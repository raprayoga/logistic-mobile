import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import DeliveryList from 'multikurirkurir/src/components/organisms/DeliveryList';
import Search from 'multikurirkurir/src/components/organisms/Search';


export default class Delivery extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <DeliveryList />
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