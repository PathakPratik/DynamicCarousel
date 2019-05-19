import React, { Component } from "react";
import "../styles/SlideSelector.css";
import { connect } from 'react-redux';
import withLocalState from './withLocalState';
import { updateCurrentSelection, pushToUserSelections, setUserSelections } from '../actions/slidesActions.js';

class SlideSelector extends React.Component {

  handleChange(event) {

    const currentSelection = event.target.value;

    this.props.updateCurrentSelection(currentSelection);

    if( currentSelection != 0 )
        this.props.pushToUserSelections(currentSelection);

    this.props.saveToLocal('currentSelection', currentSelection);
    this.props.saveToLocal('userSelections', this.props.userSelections);
  }

  componentDidUpdate(){

    const currentSelectionFromLocal = this.props.loadFromLocal('currentSelection');
    const userSelectionsFromLocal = this.props.loadFromLocal('userSelections');

    if( this.props.initialLoad && currentSelectionFromLocal )
        this.props.updateCurrentSelection(currentSelectionFromLocal);

    if( this.props.initialLoad && userSelectionsFromLocal )
        this.props.setUserSelections(userSelectionsFromLocal);

  }

  buildOptions() {
      var arr = [];

      for (let i = 1; i <= 20; i++) {
          arr.push(<option key={i} value={i}>{i}</option>)
      }

      return arr;
  }

  render() {

    return (
    <div className="SlideSelector">
      <form>
        <label className="selectSildesComp">
          <b className="selectSildes">Select Slides:</b>
          <select value={this.props.currentSelection} onChange={this.handleChange.bind(this)}>
             <option key={0} value={0}>Select</option>
             {this.buildOptions()}
          </select>
        </label>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userSelections: state.slideSelectionDetails.userSelections,
    currentSelection: state.slideSelectionDetails.currentSelection,
    initialLoad: state.slideSelectionDetails.initialLoad
  };
}

const mapDispatchToProps = {
  updateCurrentSelection,
  pushToUserSelections,
  setUserSelections
};

const SlideSelectorWithLocalState = withLocalState(SlideSelector);

export default connect(mapStateToProps, mapDispatchToProps)(SlideSelectorWithLocalState);