import React from 'react'
import {View, Dimensions} from 'react-native';
import {
  Box,
  NativeBaseProvider,
  Text
} from "native-base"
import Card from 'multikurirkurir/src/components/atoms/Card'

function BodyCard(props) {
  return (
    <Box height={'100%'}>
      <Text pt={2} fontWeight='bold' fontSize="lg">HubTangkot</Text>
      <Text  fontSize="xs">
        5 items
      </Text>
      <Text  fontSize="sm">
        Jl Cibodas Raya No. 22 RT 01/07, Kel. Karawaci Baru, Kota Tangerang, Banten
      </Text>
    </Box>
  )
}

export default function HOCard(props) {
  // const alamatPengirim = props.alamatLengkap + ' ' + props.kodepos
  // const upperAlamatPengirim = alamatPengirim.toUpperCase()
  // const namaPengirim = props.namaPengirim.toUpperCase()
  
  return (
    <NativeBaseProvider>
      <View width={Dimensions.get('window').width}> 
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
            height: 130
          }}
          body={<BodyCard
            // alamat={upperAlamatPengirim}
            // namaPengirim={namaPengirim}
            // buttonAction={props.buttonAction}
          />}
        />
      </View >
    </NativeBaseProvider>
  )
}
