import React, { useState } from 'react';

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
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <PersonalDataPopupWrapper status={props.status}>
      {console.log(name)}
      <PersonalDataPopup__FadeScreen status={props.status} onClick={props.handler}/>
      <PersonalDataPopup__Content status={props.status}>
        <CloseButton onClick={props.handler} />
        <PersonalDataPopup__Title>
          Укажите Ваши данные
        </PersonalDataPopup__Title>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <input value={mail} onChange={e => setMail(e.target.value)}></input>
        <input value={phone} onChange={e => setPhone(e.target.value)}></input>
        <PersonalDataPopup__ButtonComplete>
          Готово
        </PersonalDataPopup__ButtonComplete>
      </PersonalDataPopup__Content>
    </PersonalDataPopupWrapper>
  );
}

export default PersonalDataPopup;