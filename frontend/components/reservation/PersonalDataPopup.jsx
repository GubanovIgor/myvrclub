import React, { useState } from 'react';

// ActionCreators
import { addSession } from '../../redux/actions/reservation';

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

  return (
    <PersonalDataPopupWrapper status={props.status}>
      <PersonalDataPopup__FadeScreen status={props.status} onClick={props.handler}/>
      <PersonalDataPopup__Content status={props.status}>
        <CloseButton onClick={props.handler} />
        <PersonalDataPopup__Title>
          Укажите Ваши данные
        </PersonalDataPopup__Title>
        <input name='name' value={formData.name} onChange={e => changeInput(e.target)}></input>
        <input name='mail' value={formData.mail} onChange={e => changeInput(e.target)}></input>
        <input name='phone' value={formData.phone} onChange={e => changeInput(e.target)}></input>
        <PersonalDataPopup__ButtonComplete onClick={() => addSession(props.reservPopupData)}>
          Готово
        </PersonalDataPopup__ButtonComplete>
      </PersonalDataPopup__Content>
    </PersonalDataPopupWrapper>
  );
}

export default PersonalDataPopup;