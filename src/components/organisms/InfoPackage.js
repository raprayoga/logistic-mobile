import React from 'react'
import {
  Box,
  Badge,
  Text,
  Flex
} from "native-base"
import { useRoute } from '@react-navigation/native';
import helper from 'multikurirkurir/src/helper';


export default function InfoPackage(props) {
  const route = useRoute();
  const data = route.params.data
  const price = helper.stringFormat.formatRupiah(String(parseInt(data.detail_paket.price)), 'Rp. ')
  const insurance = helper.stringFormat.formatRupiah(String(parseInt(data.detail_paket.insurance_price)), 'Rp. ')

  const pickup = data.pickup_alamat_pengirim == '1' ? 'Pengirim' : 'Agent'

  const BadgeTitle = () => {
    return (
      props.badge &&
      <Badge rounded="xl" bg='#28A745' w='50%' mt='4' >
        <Text color='white' >Pickup Alamat {pickup}</Text>
      </Badge>
    )
  }

  return (
    <Box
      bg="coolGray.100"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        letterSpacing: "lg",
      }}
      shadow={2}
      px={3}
    >
      <BadgeTitle />
      <Flex direction="row" mt="1.5">
        <Box w={'40%'}>
          <Text>Tracking Number</Text>
        </Box>
        <Text bold>{data.airwaybill}</Text>
      </Flex>

      <Flex direction="row">
        <Box w={'40%'}>
          <Text>Service</Text>
        </Box>
        <Text>{data.productname.split("|")[0]}</Text>
      </Flex>

      <Flex direction="row" mt="3">
        <Box w={'40%'}>
          <Text>Nama Barang</Text>
        </Box>
        <Text>{data.detail_paket.name}</Text>
      </Flex>

      <Flex direction="row">
        <Box w={'40%'}>
          <Text>Jumlah</Text>
        </Box>
        <Text>{data.detail_paket.total} Pcs</Text>
      </Flex>

      <Flex direction="row">
        <Box w={'40%'}>
          <Text>Berat</Text>
        </Box>
        <Text>{data.detail_paket.weight} Kg</Text>
      </Flex>

      <Flex direction="row">
        <Box w={'40%'}>
          <Text>Keterangan</Text>
        </Box>
        <Text>{data.detail_paket.note}</Text>
      </Flex>

      <Flex direction="row" mt={3}>
        <Box w={'40%'}>
          <Text>Ongkir</Text>
        </Box>
        <Text>{price}</Text>
      </Flex>

      <Flex direction="row" mb={8}>
        <Box w={'40%'}>
          <Text>Asuransi</Text>
        </Box>
        <Text>{insurance}</Text>
      </Flex>
    </Box>
  )
}
