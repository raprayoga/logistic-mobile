import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import {
  ScrollView,
  VStack
} from "native-base"

import InfoPackage from 'multikurirkurir/src/components/organisms/InfoPackage';
import InfoPersonal from 'multikurirkurir/src/components/organisms/InfoPersonal';

export default class DetailPackageHO extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <VStack space="3" mb="5">
          <InfoPackage badge={false}/>
          <InfoPersonal />
        </VStack>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});