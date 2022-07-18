import React, { useState, useEffect } from 'react'

import { _removeItemValue } from 'multikurirkurir/src/stores/asyncStore';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { removePickupList } from 'multikurirkurir/src/stores/slices/pickupSlice'

import {
  Button
} from "native-base"

export default function Logout() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation()

  const removePickup = async() => {
    await dispatch(removePickupList())
  }

  const logout = async e => {
    await _removeItemValue('@token')
    removePickup()

    navigation.reset({
      index: 0,
      routes: [{
          name: 'Login'
      }],
    });
  }

  return (
    <>
      <Button style={{ width: '100%' }}
        isLoading={isLoading}
        isLoadingText="Process"
        onPress={() => logout()}
        colorScheme="primary"
        variant='solid'
        _loading={{
          bg: 'primary'
        }}
        >
        Log Out
      </Button>
    </>
  )
}
