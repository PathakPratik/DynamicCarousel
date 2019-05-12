import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/DynamicCarousel.css";

export default class DynamicCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

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

  render() {
    return (
    <div className="carouselSection">
    { ( this.props.currentSelection == 0 ? false : true ) &&
        <Carousel>
            {this.getSlides(this.props.currentSelection)}
        </Carousel>
    }
    </div>
    );
  }
}