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
        <h2><Link to='/recomend'>Recommended Movies</Link></h2>
        <Slider {...settings} className='slider'>
          <div className="slide">
            <Link to='/detail/16'>
              <img src="images/poster2_1.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/17'>
              <img src="images/poster2_2.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/18'>
              <img src="images/poster2_3.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/19'>
              <img src="images/poster2_4.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/20'>
              <img src="images/poster2_5.jpg" alt=""/>
            </Link>
          </div>
          <div className="slide">
            <Link to='/detail/21'>
              <img src="images/poster2_6.jpg" alt=""/>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}