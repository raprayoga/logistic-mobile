import React from 'react'
import {View, Dimensions} from 'react-native';
import {
  Box,
  NativeBaseProvider,
  Text,
  Flex,
  Spacer,
  Divider
} from "native-base"

import Card from 'multikurirkurir/src/components/atoms/Card'

function HeaderCard(props) {
  return (
    <>
      <Flex direction="row" mb="2.5" mt="1.5" alignItems="center">
        <Text fontSize="md" fontWeight={'bold'}>{props.airwaybill}</Text>
        <Spacer />
        {props.headerDropdown}
      </Flex>
      {props.childComponent}
      <Divider />
    </>
  )
}

function BodyCard(props) {
  return (
    <Box height={'70%'}>
      <Text pt={2} fontSize="md" fontWeight={'bold'}>{props.namaPengirim}</Text>
      <Text  fontSize="xs">
        {props.alamat}
      </Text>
      <Box position="absolute" bottom={0} width={'100%'} >
        <Flex direction="row-reverse">
          {props.buttonAction}
        </Flex>
      </Box>
      {props.childComponent}
    </Box>
  )
}

export default function OrderCard(props) {
  const alamatPengirim = props.alamatLengkap + ' ' + props.kodepos
  const upperAlamatPengirim = alamatPengirim.toUpperCase()
  const namaPengirim = props.namaPengirim.toUpperCase()
  
  return (
    <NativeBaseProvider>
      <View width={Dimensions.get('window').width - 24}> 
        <Card
          config={{
            pt: 1,
            px: 3,
            bg: "coolGray.100",
            _text: {
              fontSize: "md",
              fontWeight: "medium",
              color: "warmGray.50",
              letterSpacing: "lg",
            },
            shadow: 2,
            borderRadius: 5,
            height: 175
          }}
          header={<HeaderCard
            airwaybill={props.airwaybill}
            childComponent={props.childHeader}
            headerDropdown={props.headerDropdown}
          />}
          body={<BodyCard
            alamat={upperAlamatPengirim}
            namaPengirim={namaPengirim}
            buttonAction={props.buttonAction}
            childComponent={props.childBody}
          />}
        />
      </View >
    </NativeBaseProvider>
  )
}
