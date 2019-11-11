import styled from "styled-components";

// Темный экран
export const FadeScreen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #686b69;
  opacity: 0.7;

  z-index: 1;
`;

// Плашка попапа
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 792px;

  border-radius: 10px;
  background-color: #FFF;

  padding: 30px;

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
  }
`;

export const Paragraph = styled.div`
  white-space: nowrap;
  font-size: 18px;
  color: #505051;

  margin-right: 15px;
`;

export const PriceCategorys = styled.div`
  display: flex;

  margin-left: auto;
`;

export const PriceCategoryWrapper = styled.div`
  width: 80px;

  border-bottom: 2px solid orange;

  text-align: center;

  padding: 10px 0 5px;
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

  border: 1px solid #a94ca5;
  color: #a94ca5;
  line-height: 40px;
  text-align: center;

  margin: 2px;
`;

export const HeadsetsInfo = styled.div`
  margin-bottom: 20px;
`;

export const HeadsetsTable = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeadsetSectionWrapper = styled.div`
  width: 250px;
`;

export const HeadsetSection__Title = styled.div`
  font-size: 14px;
  color: #1f1f22;

  margin-bottom: 20px;
  margin-left: 20px;
`;

export const HeadsetSection__Items = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 50px;
    height: 50px;

    margin: 0 20px;
  }
`;