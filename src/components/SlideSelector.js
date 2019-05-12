import React, { Component } from "react";
import "../styles/SlideSelector.css";

export default class SlideSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.updateUserSelections(event.target.value);
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
      <form onSubmit={this.handleSubmit}>
        <label className="selectSildesComp">
          <b className="selectSildes">Select Slides:</b>
          <select value={this.state.value} onChange={this.handleChange}>
             <option key={0} value={0}>Select</option>
             {this.buildOptions()}
          </select>
        </label>
      </form>
    </div>
    );
  }
}