import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import slide1 from '../../asset/3rd-test-pink-ball-india-vs-england-14-02-2021-11-02-17-390.jpg';
import slide2 from '../../asset/4th-test-india-vs-england-14-02-2021-11-03-54-492.jpg';
import slide3 from '../../asset/3rd-test-pink-ball-india-vs-england-14-02-2021-11-02-17-390.jpg';
import slide4 from '../../asset/poetry-storytelling-aur-chai-19-02-2021-07-46-14-898.jpg';

// var Carousel = require('react-responsive-carousel').Carousel;
export default class Carousels extends Component {
  state = {
    activeSilde: 0,
  }


  handleSlideSelect = () => {

  }

  render() {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items:1},
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
    }

    const CustomLeftArrow = ({ onclick}) => (
      <button className="arrow left" onClick={onclick}>
        <a className="carousel-control-prev" role="button" data-slide="prev">
          <span className="carousel-control" aria-hidden="true">
            <i className="mdi mdi-arrow-left" data-ripple-color="#F0F0F0" style={{ color: '#fff' }}></i>
          </span>
          <span className="sr-only">Previous</span>
        </a>
      </button>
    );

    const CustomRightArrow = ({ onclick}) => (
      <button className="arrow right" onClick={onclick}>
        <a className="carousel-control-next" role="button" data-slide="next">
          <span className="carousel-control" aria-hidden="true"><i className="mdi mdi-arrow-right" data-ripple-color="#F0F0F0" style={{ color: '#fff' }}></i></span>
          <span className="sr-only">Next</span>
        </a>
      </button>
    );

    return (
      // <!-- Main Carousel Section Start -->
      <div id="main-slide" className="carousel slide" data-ride="carousel" >
        <div className="carousel-inner">

          <Carousel responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={true}
            className=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customLeftArrow={<CustomLeftArrow onclick={MouseEvent} />}
            customRightArrow={<CustomRightArrow onclick={MouseEvent} />}
          >

            <div className="carousel-item active" style={{height:'250px', margin:'1%'}}>
              <img className="d-block w-90" src={slide1} style={{height:'100%'}} alt="First slide" />
           
            </div>
            <div className="carousel-item active " style={{height:'250px', margin:'1%'}}>
              <img className="d-block w-90" src={slide2} style={{height:'100%'}} alt="Second slide" />
            
            </div>
            <div className="carousel-item active" style={{height:'250px', margin:'1%'}}>
              <img className="d-block w-90" src={slide3} style={{height:'100%'}} alt="Third slide" />
           
            </div>
            <div className="carousel-item active" style={{height:'250px', margin:'1%'}}>
              <img className="d-block w-90" src={slide4} style={{height:'100%'}} alt="fourth slide" />
           
            </div>
   
          </Carousel>
        </div>



      </div>
      /* <!-- Main Carousel Section End --> */
    );

  }
}
// export default Carousels;