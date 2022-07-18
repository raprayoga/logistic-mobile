import React from 'react'

import {Image} from 'react-native';
import {muku_icon} from 'multikurirkurir/src/constants/icons';

export default function MultikurirIcon(props) {
  return (
    <>
      <Image
        source={muku_icon}
        style={props.styles}>
      </Image>   
    </>
  )
} 