import React from 'react'
import InfoPersonalCard from 'multikurirkurir/src/components/molecules/InfoPersonalCard'
import { useRoute } from '@react-navigation/native';

export default function InfoPersonal(props) {
  const route = useRoute();
  const data = route.params.data

  return (
    <>
      <InfoPersonalCard data={data.alamat_penerima} title='Info Alamat Penerima'/>
      <InfoPersonalCard data={data.alamat_pengirim} title='Info Alamat Pengirm'/>
      <InfoPersonalCard data={data.alamat_penerima} title='Info Alamat Agent'/>
    </>
  )
}
