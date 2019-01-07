import React, { Component } from "react"
import {
  Container,
  Button,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"

export default class Reactstrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <Container>
        <Button color="primary" onClick={this.toggle} size="lg">
          Button
        </Button>
        <br />
        <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle}>
          This is an Alert
        </Alert>
        <Modal isOpen={this.state.visible}>
          <ModalHeader>Title</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>
            <Button color="primary">Sign Up</Button>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </Container>
    )
  }
}
