import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SportsCollections.css";
import ImageSlider from "../components/ImageSlider";
import Slideshow from "../components/SlideShow";
import {
  SliderDataSports_1,
  SliderDataSports_2,
  SliderDataSports_3,
  SliderDataCasual_1,
  SliderDataCasual_2,
  SliderDataCasual_3,
} from "../components/SliderData";

class SportsCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="containerImage">
          <div className="container-box-Image">
            <ImageSlider slides={SliderDataCasual_1} />
          </div>

          <div className="container-box-Image">
            <ImageSlider slides={SliderDataCasual_2} />
          </div>
          <div className="shopNow-Container">
            <Link to="/Category">
              <button id="explore">EXPLORE</button>
            </Link>
          </div>
          <div className="Category1p">Category 1</div>
        </div>
        <div id="containerImage">
          <div className="container-box-Image">
            <ImageSlider slides={SliderDataCasual_1} />
          </div>

          <div className="container-box-Image">
            <ImageSlider slides={SliderDataCasual_2} />
          </div>
          <div className="shopNow-Container">
            <Link to="/Category_2">
              <button id="explore">EXPLORE</button>
            </Link>
          </div>
          <div className="Category1p">Category 2</div>
        </div>
      </div>
    );
  }
}

export default SportsCollections;
