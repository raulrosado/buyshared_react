import { Button,Text,Modal } from '@nextui-org/react'
import React from 'react'

function ModalCreado(props) {
  return (
    <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={props.visible}
        onClose={props.closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {props.title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={props.closeHandler}>
            Close
          </Button>
          <Button auto onPress={props.function}>
            {props.botton}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalCreado