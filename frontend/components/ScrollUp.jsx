import React, { Component } from 'react';

import styles from '../stylesheets/scrollUp.module.scss';

export default class ScrollUp extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 400) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    };
  };

  handleClick = () => {
    window.scrollBy({
      top: -window.pageYOffset,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div>
        <a onClick={this.handleClick} className={this.state.show ? styles.scrollBtn : ''}/>
      </div>
    );
  };
};
