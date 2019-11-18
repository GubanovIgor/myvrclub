// Styled Components
import {
  PersonalDataPopupWrapper,
  PersonalDataPopup__FadeScreen,
  PersonalDataPopup__Content,
  PersonalDataPopup__Title,
  PersonalDataPopup__ButtonComplete,
} from '../../stylesheets/reservation';

const PersonalDataPopup = (props) => {
  return (
    <PersonalDataPopupWrapper status={props.status}>
      <PersonalDataPopup__FadeScreen status={props.status} onClick={props.handler}/>
      <PersonalDataPopup__Content status={props.status}>
        <PersonalDataPopup__Title>
          Укажите Ваши данные
        </PersonalDataPopup__Title>
        <input></input>
        <input></input>
        <input></input>
        <PersonalDataPopup__ButtonComplete>
          Готово
        </PersonalDataPopup__ButtonComplete>
      </PersonalDataPopup__Content>
    </PersonalDataPopupWrapper>
  );
}

export default PersonalDataPopup;