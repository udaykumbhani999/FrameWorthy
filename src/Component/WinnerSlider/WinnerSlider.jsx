import React from "react";
import "../WinnerSlider/WinnerSlider.scss";

import { Image } from "../../Assets/Image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function WinnerSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="Sliderpart">
        <Slider {...settings}>
          <div className="slider-box">
            <div className="slider-image">
              <img src={Image.Winner_img} alt="Winner_img" />
            </div>
          </div>
          <div className="slider-box">
            <div className="slider-image">
              <img src={Image.Winner_img} alt="Winner_img" />
            </div>
          </div>
          <div className="slider-box">
            <div className="slider-image">
              <img src={Image.Winner_img} alt="Winner_img" />
            </div>
          </div>
        </Slider> 
    </div>
  );
}
