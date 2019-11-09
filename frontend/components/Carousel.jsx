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
  constructor(props){
    super(props)
    this.carouselMechanism = React.createRef()
  }

  state = {
    carouselPosition: 0,
    maxShift: 2^9,
  }

  componentDidMount = () => {
    const container = document.querySelector('.carouselMechanism')
    console.log(container.offsetWidth)
  }

  scroll = async (side) => {
    // Ширина внтуреннего блока карусели
    const carouselMechanismWidth = this.carouselMechanism.current.offsetWidth;
    // Количество items
    const itemsAmount = this.props.items.length;
    // Ширина item
    const itemWidth = this.carouselMechanism.current.firstChild.clientWidth;
    // Получаем margin-right у item и приводим в числовой вид регуляркой
    const itemMargin = parseInt(window
      .getComputedStyle(this.carouselMechanism.current.firstChild)
      .getPropertyValue("margin-right")
      .replace(/\D/g,''));
    // Общая ширина элемента (item + margin)
    const itemTotalWidth = itemWidth + itemMargin;
    // Количство целиком помещающихся item + margin
    const fullItemsAmount = Math.floor(carouselMechanismWidth / itemTotalWidth);

    // Длина сдвига
    const shearLength = fullItemsAmount * itemTotalWidth;
    // Максимальный свдиг
    const maxShift = itemsAmount * itemTotalWidth - carouselMechanismWidth - itemMargin;

    this.setState({ maxShift: maxShift });

    if (side === 'left') {
      await this.setState({ carouselPosition: this.state.carouselPosition + shearLength })
      if (this.state.carouselPosition > 0) {
        await this.setState({ carouselPosition: 0 })
      }
    } else {
      await this.setState({ carouselPosition: this.state.carouselPosition - shearLength })
      if (this.state.carouselPosition < -maxShift) {
        await this.setState({ carouselPosition: -maxShift })
      }
    }
  }

  render() {
    const { items } = this.props;
    const { carouselPosition, maxShift } = this.state;

    return (
      <CarouselWrapper>
        <CarouselMechanism ref={this.carouselMechanism} className={'carouselMechanism'} position={carouselPosition}>
          {items}
        </CarouselMechanism>

        {(this.state.carouselPosition !== 0) && <ToLeftButton onClick={() => this.scroll('left')}
          img={'arrow-to-left'}/>}
        {(this.state.carouselPosition !== -maxShift) && <ToRightButton onClick={() => this.scroll('right')}
          img={'arrow-to-right'}/>}
      </CarouselWrapper>
    );
  }
}

export default Carousel;