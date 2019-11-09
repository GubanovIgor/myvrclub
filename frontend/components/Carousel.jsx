import React, { Component } from 'react';

import {
  ToRightButton,
  ToLeftButton,
  CarouselWrapper,
  CarouselMechanism,
} from '../stylesheets/carusel';

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.carouselMechanism = React.createRef()
  }

  state = {
    carouselPosition: 0,
    maxShift: 2 ^ 9,
    buttonCoordX: 0,
    buttonCoordY: 0,
  }

  componentDidMount = () => {
    // Высота картинки
    const imgHeight = this.carouselMechanism.current.firstChild.firstChild.clientHeight;
    // Padding-top у CarouselWrapper
    const wrapperPadding = 30;
    // Ширина кнопки
    const buttonWidth = this.carouselMechanism.current.nextSibling.clientWidth;
    // Высота кнопки
    const buttonHeight = this.carouselMechanism.current.nextSibling.clientHeight;

    this.setState({
      buttonCoordX: buttonWidth / 2,
      buttonCoordY: imgHeight / 2 - buttonHeight / 2 + wrapperPadding,
    })
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
      .replace(/\D/g, ''));
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
    const { carouselPosition, maxShift, buttonCoordX, buttonCoordY } = this.state;

    return (
      <CarouselWrapper>
        <CarouselMechanism
          ref={this.carouselMechanism}
          className={'carouselMechanism'}
          position={carouselPosition}>
          {items}
        </CarouselMechanism>

        {(this.state.carouselPosition !== 0) &&
          <ToLeftButton
            onClick={() => this.scroll('left')}
            className={'carouselShiftButton'}
            coordY={buttonCoordY}
            coordX={buttonCoordX}
            img={'arrow-to-left'}
          />}
        {(this.state.carouselPosition !== -maxShift) &&
          <ToRightButton
            onClick={() => this.scroll('right')}
            className={'carouselShiftButton'}
            coordY={buttonCoordY}
            coordX={buttonCoordX}
            img={'arrow-to-right'}
          />}
      </CarouselWrapper>
    );
  }
}

export default Carousel;