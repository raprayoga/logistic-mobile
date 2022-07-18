import React from 'react'
import {Dimensions} from 'react-native';

import Card from 'multikurirkurir/src/components/atoms/Card'
import ContentLoader, { Rect } from 'react-content-loader/native'

function BodyCard(props) {
  return (
    <>
      <ContentLoader
        backgroundColor={'#e5e7e9'}
        foregroundColor={'#f8f8f8'}
      >
        <Rect x="0" y="10" rx="4" ry="4" width="50%" height="20" />
        <Rect x={Dimensions.get('window').width - 60} y="10" rx="3" ry="3" width="8" height="20" />

        <Rect x="0" y="48" rx="4" ry="4" width="50%" height="23" />
        <Rect x="0" y="75" rx="4" ry="4" width="80%" height="13" />
        <Rect x="0" y="93" rx="4" ry="4" width="80%" height="13" />
        <Rect x="0" y="111" rx="4" ry="4" width="50%" height="13" />
        <Rect x="50%" y="130" rx="4" ry="4" width="50%" height="25" />
      </ContentLoader>
    </>
  )
}

export default function CardSkeleton(props) {
  
  return (
    <Card
      config={{
        pt: 1,
        px: 3,
        bg: "coolGray.100",
        _text: {
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        },
        shadow: 2,
        borderRadius: 5,
        height: 175
      }}
      body={<BodyCard />}
    />
  )
}
