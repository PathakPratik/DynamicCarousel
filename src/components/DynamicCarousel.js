import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from 'react-redux';
import withLocalState from './withLocalState';
import "../styles/DynamicCarousel.css";

class DynamicCarousel extends Component {

  getSlides(num) {

      var numberToWord = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','Eighteen ','Nineteen', 'Twenty'];

      var arr = [];

      for (let i = 1; i <= num; i++) {
          arr.push(
              <Carousel.Item key={i}>
                <Carousel.Caption>
                  <h3>{numberToWord[i].toUpperCase()}</h3>
                  <p>Label {numberToWord[i]}</p>
                </Carousel.Caption>
              </Carousel.Item>
          )
      }

      return arr;
  }

  deleteLocalState(){
    this.props.removeFromLocal('currentSelection');
    this.props.removeFromLocal('userSelections');
    alert("Deleted Saved State Successfully!")
    window.location.reload();
  }

  render() {

    return (
    <div className="carouselSection">
    { ( this.props.currentSelection == 0 ? false : true ) &&
        <div>
            <Carousel>
                {this.getSlides(this.props.currentSelection)}
            </Carousel>
            <div className="deleteStateBtn">
            <span onClick={this.deleteLocalState.bind(this)}>{this.props.children}</span>
            </div>
        </div>
    }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSelection: state.slideSelectionDetails.currentSelection,
    initialLoad: state.slideSelectionDetails.initialLoad
  };
}

const DynamicCarouselWithLocalState = withLocalState(DynamicCarousel);

export default connect(mapStateToProps)(DynamicCarouselWithLocalState);