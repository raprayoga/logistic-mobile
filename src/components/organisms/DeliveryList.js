import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list } from 'multikurirkurir/src/services/delivery'
import { Link } from '@react-navigation/native';

import OrderCard from 'multikurirkurir/src/components/molecules/OrderCard'
import CardSkeleton from '../molecules/CardSkeleton';
import OrderOption from 'multikurirkurir/src/components/molecules/OrderOption';

import {
  VStack,
  ScrollView,
  Button,
  useToast
} from "native-base"

import { useNavigation } from '@react-navigation/native';

function ButtonAction() {
  const navigation = useNavigation()

  return (
    <Button
      size="xs"
      colorScheme="info"
      variant='solid'
      width={'50%'}
      mt={5}
      rounded="xl"
      onPress={() => {
        navigation.navigate('TakePicture');
      }}
    >
      Ambil Foto
    </Button>
  )
}

export default function DeliveryList() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  let isLoading = useSelector((state) => state.pickup.status) === 'loading'
  let errorMessage = useSelector((state) => state.pickup.error)
  let status = useSelector((state) => state.pickup.status)
  let datas = useSelector((state) => state.pickup.entities)
  const toast = useToast()

  const payload = {
    current_page: 1,
    end_date: "22-05-17",
    per_page: 10,
    search_key: "user_name",
    search_text: "*",
    start_date: "22-03-29",
    status: null
  }

  useEffect(() => {
    if (status == 'failed') {
      toast.show({
        title: "Get Data",
        status: "danger",
        description: errorMessage,
      })
      if (errorMessage == 'Unauthenticated.') {
        return navigation.reset({
          index: 0,
          routes: [{
             name: 'Login'
          }],
        });
      }
    }
  }, [status])

  useEffect(() => {
    const getList = async() => {
      await dispatch(list(payload))
    }
    getList()
  }, [])

  return (
    <ScrollView>
      <VStack space="3" my="4" px="3">
        {isLoading && Object.values(datas).length < 1 ?
          ['','','',].map((data, index) => (
          <CardSkeleton key={index}/>
          ))
          :
          Object.values(datas).map((data) => (
            <Link to={{ screen: 'DetailPackageDelivery', params: { data } }} key={data.id}>
              <OrderCard
                airwaybill={data.airwaybill}
                namaPengirim={data.alamat_pengirim.name}
                alamatLengkap={data.alamat_pengirim.alamat_lengkap}
                kodepos={data.alamat_pengirim.kodepos}
                buttonAction={<ButtonAction />}
                isLoading={isLoading}
                headerDropdown={<OrderOption text={'Gagal Diantar'} />}
              />
            </Link>
          ))
        }
      </VStack>
    </ScrollView>
  )
}
