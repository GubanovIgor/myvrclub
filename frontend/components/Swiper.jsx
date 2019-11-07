import React, { Component } from 'react';

import {
  ScreenshotsSwiper,
} from '../stylesheets/index';

class Swiper extends Component {

  state = {
    startPosition: 0,
    position: 0,
    startPositionSave: 0,
    endPositionSave: 0,
    point: 0,
    transition: true,
    width: 0,
  };

  // e.targetTouches[0].clientX - значение этой хуйни лежит в рамках экрана

  handleTouchStart = (e) => {
    e.preventDefault();
    this.setState({
      width: e.target.parentNode.offsetWidth,
      transition: false,
      startPosition: e.targetTouches[0].clientX - this.state.position,
      startPositionSave: e.targetTouches[0].clientX,
      point: this.state.position,
    });
  }

  handleTouchMove = (e) => {
    e.preventDefault();
    this.setState({
      position: e.targetTouches[0].clientX - this.state.startPosition
    });
    this.setState({ endPositionSave: e.targetTouches[0].clientX })
  }

  handleTouchEnd = async () => {
    const { startPositionSave, endPositionSave, point, width } = this.state;
    let shift = startPositionSave - endPositionSave;

    this.setState({ transition: true })

    if (shift < -100) {
      this.setState({ position: point + width + 5.5 })
    } else if (shift > 100) {
      this.setState({ position: point - width - 5.5 })
    } else {
      this.setState({ position: point })
    }
  }

  render() {
    const { transition, position } = this.state;
    return (
      <ScreenshotsSwiper position={position} transition={transition}

      // я тут
      onTouchStart={(e) => this.handleTouchStart(e)}
      onTouchMove={(e) => this.handleTouchMove(e)}
      onTouchEnd={() => this.handleTouchEnd()}>

      </ScreenshotsSwiper>
    );
  }
}

export default Swiper;
