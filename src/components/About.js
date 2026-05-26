import React, { Component } from "react";
//
class AboutBlock extends Component {
  render() {
    const { image_main, image_small, title, children } = this.props;
    if (!image_main) return;
    return (
      <div>
        <div
          className="content-main-image"
          style={{
            background: `url(${image_main.url})`,
          }}
        >
          <div> {title}</div>
        </div>
        <div className="content-wrapper content-wrapper-divided about-wrapper">
          <div className="about-image-card">
            <img src={image_small.src} alt={image_small.alt} width={900} height={600} loading="lazy" />
          </div>
          <div className="content-text">{children}</div>
        </div>
      </div>
    );
  }
}

export default AboutBlock;
