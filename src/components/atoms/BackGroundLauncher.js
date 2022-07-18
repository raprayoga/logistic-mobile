import React from 'react'

import {ImageBackground} from 'react-native';
import {launcher_background} from 'multikurirkurir/src/constants/images';

export default function BackGroundLauncher(props) {
  return (
    <>
      <ImageBackground
        source={launcher_background}
        style={props.styles}>
        {props.children}
      </ImageBackground>
    </>
  )
}
