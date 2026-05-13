import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';

class SimpleSlider extends Component {

  render() {
    const { images } = this.props;

    const settings = {
      fade: true,
      dots: true,
      infinite: true,
      onLazyLoad: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 4,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 6000
    };

    return (
      <div className="carrousel_wrapper">
        <Slider {...settings}>
          {images ? images.map((val, i) => (
            <div key={i}>
              <div
                className="carrousel_image"
                style={{
                  background: `url(${val.url})`
                }} />
            </div>)) : <span>"Loading..."</span>}
        </Slider>
      </div >
    );
  }
}

SimpleSlider.displayName = 'SimpleSlider';
SimpleSlider.propTypes = {
  images: PropTypes.array,
};
export default SimpleSlider;
