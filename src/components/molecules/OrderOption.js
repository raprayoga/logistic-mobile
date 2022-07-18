import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from '@react-navigation/native';
import OrderModal from 'multikurirkurir/src/components/atoms/OrderModal';

import {
  Box,
  Text
} from "native-base"

export default function OrderOption(props ) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const BodyModal = () => {
    return (
      <Link to={{ screen: 'TakePicture' }}>
        <Box height={'100%'}>
          <Text>
            {props.text}
          </Text>
        </Box>
      </Link>
    )
  }

  return (
    <>
      <Icon name="ellipsis-vertical" size={20} onPress={() => openModal()} />
      <OrderModal
        headerModal={<Text fontSize={12}>Options</Text>}
        bodyModal={<BodyModal />}
        isOpen={open}
        size={'full'}
        placement={'bottom'}
        setClose={() => setOpen(false)}
      />
    </>
  )
}