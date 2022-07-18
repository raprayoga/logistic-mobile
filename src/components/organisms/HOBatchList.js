import React from 'react'
import HOCard from 'multikurirkurir/src/components/molecules/HOCard'
import { Link } from '@react-navigation/native';

import {
  VStack,
  ScrollView,
} from "native-base"

export default function HOBatchList() {
  return (
    <ScrollView>
      <VStack space="1">
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
        <Link to={{ screen: 'HOPackageList' }}>
          <HOCard />
        </Link>
      </VStack>
    </ScrollView>
  )
}
