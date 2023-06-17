import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import './Slider.scss';
import { Link } from "react-router-dom";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
    };
    return (
      <div className='inner latest'>
        <h2><Link to='/latest'>latest movie</Link></h2>
        <Slider {...settings} className='slider'>
          <div className="slide">
            <Link to='/detail/1' className="width">
              <img src="images/poster1_1.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/2'>
              <img src="images/poster1_2.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/3'>
              <img src="images/poster1_3.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/4'>
              <img src="images/poster1_4.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/5'>
              <img src="images/poster1_5.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/6'>
              <img src="images/poster1_6.jpg" alt=""/>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}