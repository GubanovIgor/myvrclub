import styled from "styled-components";
const imgPath = "/static/images/icons";

// Темный экран
export const FadeScreen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: black;
  opacity: 0.7;

  z-index: 1;
`;

// Кнопка закрыть
export const CloseButton = styled.div`
  position: absolute;
  right: 22px;
  top: 22px;
  width: 32px;
  height: 32px;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 18px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

// Плашка попапа
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 792px;

  border-radius: 10px;
  background-color: #FFF;
  box-shadow: 0px 0px 20px -5px black;

  padding: 30px;

  transition: height 0.5s;

  z-index: 2;
`;

// Шапка
export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 28px;
  color: #505051;
`;

export const TitleInfo = styled.div`
  font-size: 14px;
  color: #505051;
`;

// Раздел с выбором даты и информацией по ценам
export const DateAndPriceInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  input {
    margin: 0;
    padding-left: 10px;
    width: 130px;
    border: 1px solid #69b2ff;
    cursor: pointer;
  }

  .react-datepicker-wrapper {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 6px;
      right: 10px;

      background-image: url("${imgPath}/calendar.svg");
      background-size: 21px 21px; 
      width: 21px; 
      height: 21px; 
      background-repeat: no-repeat;
      pointer-events: none;
    }

    input {
      color: #505051;
    }
  }

  .react-datepicker {
    border: 1px solid #69b2ff;

    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #1f1f22;

    .react-datepicker__triangle {
        border-bottom-color: #FFF;
      &:before {
        border-bottom-color: #69b2ff;
      }
    }

    .react-datepicker__header {
      background-color: #FFF;
      border-bottom: 1px solid #69b2ff;
    }

    .react-datepicker__navigation--previous {
      border-right-color: #69b2ff;
    }

    .react-datepicker__navigation--next {
      border-left-color: #69b2ff;
    }

    .react-datepicker__day--selected {
      background-color: #69b2ff;
    }

    .react-datepicker__current-month {
      color: #1f1f22;
      font-weight: 500;
    }
  }
`;

export const Paragraph = styled.div`
  white-space: nowrap;
  font-size: 18px;
  font-weight: 400;
  color: #505051;

  margin-right: 15px;
`;

export const PriceCategorys = styled.div`
  display: flex;

  margin-left: auto;
`;

export const PriceCategoryWrapper = styled.div`
  width: 80px;

  box-shadow: ${props => `inset 0px -2px 0px ${props.color}`};
  /* border-bottom: 2px solid orange; */

  text-align: center;

  padding: 10px 0 7px;
  margin: 0 3px;
`;

// Таблица с ячейками времени
export const TimeTable = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 20px;
`;

export const TimeItemWrapper = styled.div`
  width: 60px;
  height: 40px;

  ${props => `border: 1px solid ${props.color}`};
  ${props => (props.category === 'not available') ? 'cursor: default' : 'cursor: pointer'};
  border-radius: 5px;
  ${props => (props.status && props.category !== 'not available') ? 'color: #FFF' : `color: ${props.color}`};
  line-height: 40px;
  text-align: center;

  margin: 2px;

  ${props => (props.status && props.category !== 'not available') && `background-color: ${props.color}`};

  transition: 0.275s;

  &:hover {
    ${props => (props.category !== 'not available') && 'color: #FFF'};
    ${props => (props.category !== 'not available') && `background-color: ${props.color}`};
  }
`;

// Раздел с выбором очков
export const HeadsetsSectionWrapper = styled.div`
  height: auto;
  ${props => !props.status ? 'max-height: 0px' : 'max-height: 416px'};
  overflow: hidden;
  transition: max-height 0.375s linear;
`;

export const HeadsetsInfo = styled.div`
  margin-bottom: 20px;
`;

export const HeadsetsTable = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ModelSectionWrapper = styled.div`
  width: 250px;

  margin-bottom: 20px;

  &:nth-child(3n+3) {
    border-left: 1px solid #bfbfbf;
  }

  &:nth-child(3n+2) {
    border-left: 1px solid #bfbfbf;
  }
`;

export const ModelSection__Title = styled.div`
  font-size: 14px;
  color: #1f1f22;

  margin-bottom: 20px;
  margin-left: 15px;
`;

export const ModelSection__Items = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 30px;
`;

export const HeadsetIcon = styled.svg`
  margin: 10px 16px;
  width: 50px;
  height: 50px;

  ${props => (props.status !== 'reserved') && 'cursor: pointer'};
  ${props => (props.status === 'reserved') && 'fill: #D3D3D3'};
  ${props => (props.status === false) && 'fill: #338EEE'};

  transition: 0.5s;

  &:hover {
    ${props => (props.status !== 'reserved') && 'fill: black'};
  }
`;

// Блок с кнопкой продолжить
export const ToPersonalData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PriceInfo = styled.div`
  margin-right: 30px;
`;

export const Sum = styled.div`
  font-size: 18px;
  color: #3b3b3d;
`;

export const Commission = styled.div`
  font-size: 12px;
  color: #b9b9b9;
  line-height: 12px;
`;

export const ToPersonalDataButton = styled.div`
  width: 120px;
  height: 30px;

  cursor: pointer;
  background-color: #338EEE;
  border-radius: 3px;

  color: #FFF;
  line-height: 30px;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

// Попап сбор персональных данных
export const PersonalDataPopupWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: 10px;

  ${props => props.status ? 'opacity: 1' : 'opacity: 0'};
  ${props => !props.status && 'pointer-events: none'};

  transition: opacity 0.375s;
`;

export const PersonalDataPopup__FadeScreen = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;
  border-radius: 10px;
  opacity: 0.8;
`;

export const PersonalDataPopup__Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;

  ${props => props.status ? 'width: 350px' : 'width: 0px'};

  background-color: #FFF;
  border-radius: 0 10px 10px 0;

  padding: 30px;

  transition: width 0.375s;
`;

export const PersonalDataPopup__Title = styled.div`
  font-size: 18px;
  color: #1f1f22;
`;

export const PersonalDataPopup__ButtonComplete = styled.div`
  width: 120px;
  height: 30px;

  cursor: pointer;
  background-color: #338EEE;
  border-radius: 3px;

  color: #FFF;
  line-height: 30px;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

// Подсказки под звездочками **
export const AddInfo = styled.div`
  margin-right: auto;
  font-size: 12px;
  color: #b9b9b9;
  line-height: 18px;
`;

// Подсказки валидации
export const ValidationHint = styled.div`
  font-size: 12px;
  color: red;

  height: auto;
  ${props => !props.status ? 'max-height: 0px' : 'max-height: 18px'};
  overflow: hidden;
  transition: max-height 0.175s linear;
`;