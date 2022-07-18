import React from 'react'
import {StyleSheet} from 'react-native';
import {
  Text,
  Flex,
  Spacer
} from "native-base"

export default function HubName() {

  return (
    <Flex direction='row' my="2" px="3" alignItems={'flex-end'} justifyContent={'space-between'}>
      <Text fontSize="xl" fontWeight='bold'>Hubbandung</Text>
      <Spacer />
      <Text fontSize="xs">
        5 Paket Ditemukan
      </Text>
    </Flex>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#F7F7F7'
  }
});