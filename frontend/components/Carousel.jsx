import React, { Component } from 'react';

import {
  ToRightButton,
  ToLeftButton,
  CarouselWrapper,
  CarouselMechanism,
  WrapperForButton,
} from '../stylesheets/carusel';

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.carouselMechanism = React.createRef()
  }

  state = {
    carouselPosition: 0,
    maxShift: 0,
    buttonCoordX: 0,
    buttonCoordY: 0,
    shearLength: 0,
  }

  componentDidMount = () => {
    // Ширина внтуреннего блока карусели
    const carouselMechanismWidth = this.carouselMechanism.current.offsetWidth;
    // Количество items
    const itemsAmount = this.props.items.length;
    // Ширина item
    const itemWidth = this.carouselMechanism.current.firstChild.clientWidth;
    // Получаем margin-right у item и приводим в числовой вид регуляркой
    const itemMargin = this.props.spaceBetweenItems;
    // Общая ширина элемента (item + margin)
    const itemTotalWidth = itemWidth + itemMargin;
    // Количство целиком помещающихся item + margin
    const fullItemsAmount = Math.floor(carouselMechanismWidth / itemTotalWidth);

    // Длина сдвига
    const shearLength = fullItemsAmount * itemTotalWidth;
    // Максимальный свдиг
    const maxShift = itemsAmount * itemTotalWidth - carouselMechanismWidth - itemMargin;

    // Высота картинки
    const imgHeight = this.carouselMechanism.current.firstChild.firstChild.clientHeight;
    // Padding-top у CarouselWrapper
    let wrapperPaddingTop = 0;
    if (this.props.wrapperPaddingTop) {
      wrapperPaddingTop = this.props.wrapperPaddingTop;
    }
    // Ширина кнопки
    const buttonWidth = this.props.buttonSize;
    // Высота кнопки
    const buttonHeight = this.props.buttonSize;
    // Координаты по оси Y
    const buttonCoordY = imgHeight / 2 - buttonHeight / 2 + wrapperPaddingTop;

    this.setState({
      buttonCoordX: buttonWidth / 2,
      buttonCoordY: buttonCoordY,
      maxShift: maxShift,
      shearLength: shearLength,
    })
  }

  scroll = async (side) => {
    const { shearLength, maxShift } = this.state;

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
    const { items, spaceBetweenItems, wrapperPaddingTop, buttonSize } = this.props;
    const { carouselPosition, maxShift, buttonCoordX, buttonCoordY } = this.state;

    return (
      <CarouselWrapper>
        <WrapperForButton wrapperPaddingTop={wrapperPaddingTop}>
          <CarouselMechanism
            ref={this.carouselMechanism}
            className={'carouselMechanism'}
            position={carouselPosition}
            spaceBetweenItems={spaceBetweenItems}>
            {items}
          </CarouselMechanism>
          {(carouselPosition !== 0) &&
            <ToLeftButton
              onClick={() => this.scroll('left')}
              className={'carouselShiftButton'}
              coordY={buttonCoordY}
              coordX={buttonCoordX}
              img={'arrow-to-left'}
              size={buttonSize}
            />}
          {(carouselPosition > -maxShift) &&
            <ToRightButton
              onClick={() => this.scroll('right')}
              className={'carouselShiftButton'}
              coordY={buttonCoordY}
              coordX={buttonCoordX}
              img={'arrow-to-right'}
              size={buttonSize}
            />}
        </WrapperForButton>
      </CarouselWrapper>
    );
  }
}

export default Carousel;