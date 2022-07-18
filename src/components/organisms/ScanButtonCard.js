import React from 'react'
import { Button, Center } from 'native-base'
import { useNavigation } from '@react-navigation/native';

export default function ScanButtonCard() {
  const navigation = useNavigation()

  return (
    <Center>
      <Button
        w='80%'
        rounded="xl"
        colorScheme="success"
        variant='solid'
        my={5}
        onPress={() => {
          navigation.navigate('ScanBarcode');
        }}
      >
        Scan Barcode
      </Button>
    </Center>
  )
}
