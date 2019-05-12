import React, { Component } from "react";
import "../styles/Slides.css";
import DynamicCarousel from './DynamicCarousel';
import SlideSelector from './SlideSelector';
import UserSelectionsModal from './UserSelectionsModal';

export default class Slides extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelections: [],
      currentSelection: 0,
      selectionUpdated: false
    };
  }

  updateUserSelections( currentSelection ){

    let arr = this.state.userSelections;

    if( currentSelection != 0 )
        arr.push(currentSelection);

    this.setState({userSelections: arr, currentSelection: currentSelection, selectionUpdated: true });
  }

  render() {
    return (
    <div className="Slides">
        <SlideSelector updateUserSelections={this.updateUserSelections.bind(this)} />
        <DynamicCarousel currentSelection={this.state.currentSelection} />
        <UserSelectionsModal showFinishBtn={ (this.state.currentSelection == 0)? false : true } allUserSelections={this.state.userSelections} />
    </div>
    );
  }
}