import React, { useState } from 'react';

// ActionCreators
import { addSession, getFreeSession } from '../../redux/actions/reservation';

// Styled Components
import {
  PersonalDataPopupWrapper,
  PersonalDataPopup__FadeScreen,
  PersonalDataPopup__Content,
  PersonalDataPopup__Title,
  PersonalDataPopup__ButtonComplete,
  CloseButton,
} from '../../stylesheets/reservation';

const PersonalDataPopup = (props) => {
  const { reservPopupData } = props

  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    phone: '',
  });

  const changeInput = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  };

  const createOrder = (data) => {
    // Добавляем данные пользователя
    const dataOrder = formData

    // Добавляем id клуба
    dataOrder.clubId = data.clubId

    // Добавляем выбранную дату
    dataOrder.date = data.date

    // Добавляем выбранное время
    dataOrder.time = data.time

    // Добавляем сумму заказа
    dataOrder.sum = data.sum

    // Добавляем информацию по выбранным очкам
    const headsets = {}
    Object.keys(data.countOfChosenHeadsets).forEach(model => {
      if (data.countOfChosenHeadsets[model].current) {
        headsets[model] = []
        for (let i = 0; i < data.countOfChosenHeadsets[model].current; i++) {
          headsets[model].push({ [data.date]: data.time })
        }
      }
    })

    dataOrder.headsets = headsets
    addSession(dataOrder)
  }

  return (
    <PersonalDataPopupWrapper status={props.status}>
      <PersonalDataPopup__FadeScreen status={props.status} onClick={props.handler}/>
      <PersonalDataPopup__Content status={props.status}>
        <CloseButton onClick={props.handler} />
        <PersonalDataPopup__Title>
          Укажите Ваши данные
        </PersonalDataPopup__Title>
          <label htmlFor='name'>Имя</label>
          <input name='name' id='name' value={formData.name} onChange={e => changeInput(e.target)}></input>
          <label htmlFor='mail'>Email</label>
          <input name='mail' id='mail' value={formData.mail} onChange={e => changeInput(e.target)}></input>
          <label htmlFor='phone'>Телефон</label>
          <input name='phone' id='phone' value={formData.phone} onChange={e => changeInput(e.target)}></input>
        <PersonalDataPopup__ButtonComplete onClick={() => createOrder(reservPopupData)}>
          Готово
        </PersonalDataPopup__ButtonComplete>
      </PersonalDataPopup__Content>
    </PersonalDataPopupWrapper>
  );
}

export default PersonalDataPopup;