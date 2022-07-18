import React from 'react'

import {Text, StyleSheet} from 'react-native';
import {FONTS} from 'multikurirkurir/src/constants/theme';

export default function MultikurirText(props) {
  return (
    <>
      <Text style={{ ...props.styles, ...styles.text }}>
        Multi
        <Text style={{ color: 'red' }}>Kurir</Text>
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    ...FONTS.mukufont,
    color: '#26b4ff'
  },
});