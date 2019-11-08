import React, { Component } from 'react';

import {
  CarouselWrapper,
  CarouselMechanism,
} from '../stylesheets/index';

import {
  ToRightButton,
  ToLeftButton,
} from '../stylesheets/carusel';

class Carousel extends Component {
  state = {
    caruselPosition: 0,
  }

  componentDidMount = () => {
    const container = document.querySelector('.carouselMechanism')
    console.log(container.offsetWidth)
  }

  scroll = async (side) => {
    if (side === 'left') {
      await this.setState({ caruselPosition: this.state.caruselPosition + 950 })
      if (this.state.caruselPosition > 0) {
        await this.setState({ caruselPosition: 0 })
      }
    } else {
      await this.setState({ caruselPosition: this.state.caruselPosition - 950 })
      if (this.state.caruselPosition < -2900) {
        await this.setState({ caruselPosition: -2900 })
      }
    }
  }

  render() {
    const { items } = this.props
    return (
      <CarouselWrapper>
        <CarouselMechanism className={'carouselMechanism'}>
          {items}
        </CarouselMechanism>

        <ToLeftButton img={'arrow-to-left'}/>
        <ToRightButton img={'arrow-to-right'}/>

        {(this.state.caruselPosition !== 0 && this.props.screenMode === 'desktop') && <ToLeftButton onClick={() => this.scroll('left')}
          className={styles.toLeft}
          img={'arrow-to-left'}/>}
        {(this.state.caruselPosition !== -2900 && this.props.screenMode === 'desktop') && <ToRightButton onClick={() => this.scroll('right')}
          className={styles.toRight}
          img={'arrow-to-right'}/>}
      </CarouselWrapper>
    );
  }
}

export default Carousel;