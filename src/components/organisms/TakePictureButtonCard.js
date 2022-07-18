import React from 'react'
import { Button, Center } from 'native-base'
import { useNavigation } from '@react-navigation/native';

export default function TakePictureButtonCard() {
  const navigation = useNavigation()

  return (
    <Center>
      <Button
        w='80%'
        rounded="xl"
        colorScheme="info"
        variant='solid'
        my={5}
        onPress={() => {
          navigation.navigate('TakePicture');
        }}
      >
        Ambil Foto
      </Button>
    </Center>
  )
}
