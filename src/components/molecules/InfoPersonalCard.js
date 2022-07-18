import React from 'react'
import { Linking } from "react-native";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Divider,
  IconButton
} from "native-base"
import Card from 'multikurirkurir/src/components/atoms/Card'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

function ButtonWhatsapp(props) {
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${props.telp}&text=Selamat%Pagi,%20Saya%20dari%20pihak%20logistik`
  return (
    <IconButton
      size="xs"
      colorScheme="success"
      variant='solid'
      width={'40%'}
      rounded="xl"
      onPress={ async () => {
        await Linking.openURL(linkWhatsapp)
      }}
      _icon={{
        as: MaterialCommunityIcons,
        name: "whatsapp"
      }}
    />
  )
}

function ButtonCall(props) {
  return (
    <IconButton
      size="xs"
      colorScheme="info"
      variant='solid'
      width={'40%'}
      rounded="xl"
      onPress={ async () => {
        await Linking.openURL(`tel:${props.telp}`)
      }}
      _icon={{
        as: MaterialCommunityIcons,
        name: "phone"
      }}
    />
  )
}

function HeaderCard(props) {
  return (
    <>
      <Box mb="2.5" mt="1.5">
        <Text fontSize="md">{props.title}</Text>
      </Box>
      <Divider />
    </>
  )
}

function BodyCard(props) {
  return (
    <Box height={'70%'}>
      <Text pt={2} fontSize="md">{props.nama + '   '}
        <Text  fontSize="xs">
          {props.telp}
        </Text>
      </Text>
      <Text  fontSize="xs">
        {props.alamat}
      </Text>
      <Box position="absolute" mt={5} px={'10%'} bottom={0} width={'100%'} >
        <Flex direction="row">
          <ButtonCall telp={props.telp} />
          <Spacer />
          <ButtonWhatsapp telp={props.telp} />
        </Flex>
      </Box>
    </Box>
  )
}

export default function InfoPersonalCard(props) {
  const alamat = props.data.alamat_lengkap + ' ' + props.data.kodepos
  const upperAlamat = alamat.toUpperCase()
  const namaPengirim = props.data.name.toUpperCase()
  
  return (
    <Card
      config={{
        pt: 1,
        mb: 3,
        px: 3,
        bg: "coolGray.100",
        _text: {
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        },
        shadow: 2,
        height: 175
      }}
      header={<HeaderCard
        title={props.title}
      />}
      body={<BodyCard
        alamat={upperAlamat}
        nama={namaPengirim}
        telp={props.data.phone}
      />}
    />
  )
}
