import React, { useState } from 'react'
import {StyleSheet} from 'react-native';
import {
  IconButton,
  Flex,
  Spacer,
  Box
} from "native-base"

import FormInput from 'multikurirkurir/src/components/molecules/FormInput';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Search() {
  const [search, setSearch] = useState('');
  
  const handleInputChange = e => {
    setSearch(e.value)
  }

  const textClick = () => {
    console.warn(search)
  }


  return (
    <Box shadow={1} style={styles.searchBar}>
      <Flex direction='row' my="4" px="3" alignItems={'flex-end'} justifyContent={'space-between'}>
        <FormInput
          config={{
            w: '80%',
            rounded: "md"
          }}
          placeholder='Cari Transaksi'
          changeInput={(value) => handleInputChange({ ...value })}
        />
        <Spacer />
        <IconButton 
          colorScheme="info"
          variant='solid'
          h='85%'
          onPress={() => {
            textClick()
          }}
          _icon={{
            as: MaterialCommunityIcons,
            name: "magnify"
          }}
        />
      </Flex>
    </Box>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#F7F7F7'
  }
});