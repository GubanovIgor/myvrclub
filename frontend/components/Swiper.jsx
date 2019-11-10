import React, { Component } from 'react';

import {
  SwiperWrapper,
  SwiperMechanism,
  SwiperCounter,
} from '../stylesheets/swiper';

class Swiper extends Component {

  state = {
    startPosition: 0,
    position: 0,
    startPositionSave: 0,
    endPositionSave: 0,
    point: 0,
    transition: true,
    width: 0,
    swiperCounter: 1,
  };

  handleSwiperCounter = (side) => {
    const { swiperCounter } = this.state;

    (side === 'to right') ?
      this.setState({ swiperCounter: swiperCounter + 1 }) :
      this.setState({ swiperCounter: swiperCounter - 1 })
  }

  // e.targetTouches[0].clientX - значение этой хуйни лежит в рамках экрана

  handleTouchStart = (e) => {
    this.setState({
      width: e.target.parentNode.offsetWidth,
      transition: false,
      startPosition: e.targetTouches[0].clientX - this.state.position,
      startPositionSave: e.targetTouches[0].clientX,
      point: this.state.position,
    });
  }

  handleTouchMove = (e) => {
    this.setState({
      position: e.targetTouches[0].clientX - this.state.startPosition
    });
    this.setState({ endPositionSave: e.targetTouches[0].clientX })
  }

  handleTouchEnd = async () => {
    const { items } = this.props
    const { startPositionSave, endPositionSave, point, width, swiperCounter } = this.state;
    let shift = startPositionSave - endPositionSave;

    this.setState({ transition: true })

    if (shift < -100 && swiperCounter != 1) {
      this.handleSwiperCounter('to left')
      this.setState({ position: point + width + 7.5 })
    } else if (shift > 100 && swiperCounter != items.length) {
      this.handleSwiperCounter('to right')
      this.setState({ position: point - width - 7.5 })
    } else {
      this.setState({ position: point })
    }
  }

  render() {
    const { transition, position, swiperCounter } = this.state;
    const { items } = this.props
    return (
      <SwiperWrapper>
        <SwiperMechanism
          position={position}
          transition={transition}
          onTouchStart={(e) => this.handleTouchStart(e)}
          onTouchMove={(e) => this.handleTouchMove(e)}
          onTouchEnd={() => this.handleTouchEnd()}
        >
          {items}
        </SwiperMechanism>

        <SwiperCounter>
          {swiperCounter}/{items.length}
        </SwiperCounter>
      </SwiperWrapper>
    );
  }
}

export default Swiper;
