import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

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
      autoplaySpeed: 6000,
      accessibility: false,

      focusOnChange: false,
    };

    return (
      <div className="carrousel_wrapper">
        <Slider {...settings}>
          {images ? (
            images.map((val, i) => (
              <div key={val.url || i}>
                <div className="carrousel_image">
                  <img
                    src={val.url}
                    alt={val.alt || ""}
                    width={1920}
                    height={1080}
                    className="carrousel_image_img"
                    loading={i === settings.initialSlide ? "eager" : "lazy"}
                    fetchPriority={i === settings.initialSlide ? "high" : "auto"}
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "none",
                      margin: 0,
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <span>"Loading..."</span>
          )}
        </Slider>
      </div>
    );
  }
}

SimpleSlider.displayName = "SimpleSlider";
SimpleSlider.propTypes = {
  images: PropTypes.array,
};
export default SimpleSlider;
