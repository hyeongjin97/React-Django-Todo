import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    Image,
  } from "reactstrap"

export default class CustomModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }
    render() {
        const {toggle} = this.props;
        return (
            <Modal isOpen={true}>
            <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="todo-title">Title</Label>
                  <Input
                    type="text"
                    id="todo-title"
                    name="title"
                    value={this.state.activeItem.title}
                    disabled
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="todo-description">Description</Label>
                  <Input
                    type="text"
                    id="todo-description"
                    name="description"
                    value={this.state.activeItem.description}
                    disabled
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="completed"
                      checked={this.state.activeItem.completed}
                      disabled
                    />
                    Completed
                  </Label>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </Modal>
        );
    }
}

