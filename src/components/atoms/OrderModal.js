import React from 'react'
import { StyleSheet } from 'react-native';

import {
  Modal,
  Box,
  Text
} from "native-base"

export default function OrderModal(props) {
  const setClose = () => {
    props.setClose()
  }

  return (
    <Modal isOpen={props.isOpen} onClose={() => setClose(false)} size={props.size} >
      <Modal.Content {...styles[props.placement]}>
        <Modal.CloseButton />

        {props.headerModal &&
          <Modal.Header>
            {props.headerModal}
          </Modal.Header>
        }

        {props.bodyModal &&
          <Modal.Body>
            {props.bodyModal}
          </Modal.Body>
        }

        {props.footerModal &&
          <Modal.Footer>
            {props.footerModal}
          </Modal.Footer>
        }

      </Modal.Content>
    </Modal>
  )
}

const styles = StyleSheet.create({
  top: {
    marginBottom: "auto",
    marginTop: 0
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto"
  },
  left: {
    marginLeft: 0,
    marginRight: "auto"
  },
  right: {
    marginLeft: "auto",
    marginRight: 0
  },
  center: {}
});