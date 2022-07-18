import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list } from 'multikurirkurir/src/services/pickup'
import { Link } from '@react-navigation/native';
import CardSkeleton from 'multikurirkurir/src/components/molecules/CardSkeleton';

import OrderCard from 'multikurirkurir/src/components/molecules/OrderCard'
import {
  VStack,
  ScrollView,
  useToast
} from "native-base"

import { useNavigation } from '@react-navigation/native';

export default function HOList() {
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
            <Link to={{ screen: 'DetailPackageHO', params: { data } }} key={data.id}>
              <OrderCard
                airwaybill={data.airwaybill}
                namaPengirim={data.alamat_pengirim.name}
                alamatLengkap={data.alamat_pengirim.alamat_lengkap}
                kodepos={data.alamat_pengirim.kodepos}
                isLoading={isLoading}
              />
            </Link>
          ))
        }
      </VStack>
    </ScrollView>
  )
}
