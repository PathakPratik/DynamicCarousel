import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/UserSelectionsModal.css";

export default class UserSelectionsModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
       { this.props.showFinishBtn &&
        <Button variant="primary" className="finishButton" bsSize="lg" onClick={this.handleShow}>
          <b>Finish</b>
        </Button>
       }

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Selections</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Following are all the numbers that user selected while using the App:
            <br></br>
            {this.props.allUserSelections.join(',')}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}