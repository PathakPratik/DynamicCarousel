import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import "../styles/UserSelectionsModal.css";

const UserSelectionsModal = (props) => {

    const [showModal, showModalStatus] = useState(false);

    return (
      <div>
      { props.currentSelection != 0 &&
        <Button variant="primary" onClick={ () => showModalStatus(true) } className="finishButton" bsSize="lg">
          <b>Show User Selections</b>
        </Button>
      }
        <Modal show={showModal} onHide={ () => showModalStatus(false) }>
          <Modal.Header closeButton>
            <Modal.Title>User Selections</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Following are all the numbers that user selected while using the App:
            <br></br>
            {props.userSelections.join(',')}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ () => showModalStatus(false) }>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    userSelections: state.slideSelectionDetails.userSelections,
    currentSelection: state.slideSelectionDetails.currentSelection
  };
}

export default connect(mapStateToProps)(UserSelectionsModal);