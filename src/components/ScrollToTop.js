import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.toggleVisibility();
  }

  toggleVisibility() {
    const nextVisible = window.pageYOffset > 300;

    if (nextVisible !== this.state.is_visible) {
      this.setState({
        is_visible: nextVisible
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <button
            type="button"
            onClick={() => this.scrollToTop()}
            className="button button-scroll"
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon icon={faChevronUp} size="7x"/>
          </button>
        )}
      </div>
    );
  }
}