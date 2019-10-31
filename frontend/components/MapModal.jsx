import React from 'react';

// Styled Components
import {
  MapModal__Wrapper,
  MapModal__Title,
  MapModal__Img,
  MapModal__Info
} from '../stylesheets/index';

const MapModal = (props) => (
    <MapModal__Wrapper>
      <MapModal__Title>
        {props.club.name}
      </MapModal__Title>
      <MapModal__Img src={`/static/images/clubs/${props.club.screenShot[0]}`}/>
      <MapModal__Info>
        <span>Адрес: </span>{props.club.address}<br/>
        <span>Метро: </span>{props.club.metro[0]}<br/>
        <span>Время работы: </span>{props.club.workTime.join(', ')}<br/>
        {/*<span>Количество шлемов: </span>6 шт.<br></br>*/}
        <span>Стоимость 30 мин: </span>от {props.club.price[0]} ₽<br/>
        {/* <span>Оборудование: </span>{props.club.equipment.join(', ')}<br/> */}
      </MapModal__Info>
    </MapModal__Wrapper>
);

export default MapModal;