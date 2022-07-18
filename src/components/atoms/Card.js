import React from 'react'
import {
  Box,
} from "native-base"

export default function Card(props) {
  return (
    <Box
      {...props.config}
    >
      {props.header}
      {props.body}
      {props.footer}
    </Box>
  )
}
