import React, { Component } from "react";
import "../styles/Slides.css";
import { Button } from "react-bootstrap";
import DynamicCarousel from './DynamicCarousel';
import SlideSelector from './SlideSelector';
import UserSelectionsModal from './UserSelectionsModal';

export default class Slides extends Component {

  logoutUser(){
    this.props.history.push('/');
  }

  render() {
    return (
    <div className="Slides">
        <Button variant="primary" className="logoutButton" onClick={this.logoutUser.bind(this)} bsSize="lg">
          <b>Logout</b>
        </Button>
        <SlideSelector />
        <DynamicCarousel>
            <Button variant="primary" className="finishButton" bsSize="lg">
              <b>Delete State</b>
            </Button>
        </DynamicCarousel>
        <UserSelectionsModal/>
    </div>
    );
  }
}