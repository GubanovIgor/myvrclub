import styled from "styled-components";
const imgPath = "/static/images/icons";

export const ClientCardWrapper = styled.div`
  width: 200px;
  height: 322px;

  color: #505051;

  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.16);

  margin: 40px auto;
  padding: 30px;
`;

export const Title = styled.div`
  font-size: 18px;
  line-height: 18px;
  text-align: center;

  border-bottom: 1px solid #505051;

  margin-bottom: 20px;

  p {
    font-size: 10px;
    text-align: center;

    margin: 0;
  }
`;

export const Content = styled.div`
  .name {
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
  }

  .mail {
    font-size: 12px;
    line-height: 12px;

    margin-bottom: 20px;
  }

  .phone {
    font-size: 16px;
    font-weight: 500;

    margin-bottom: 20px;
  }

  .time {
    margin-bottom: 20px;
  }

  .sum {
    font-size: 16px;
    font-weight: 500;

    margin-bottom: 30px;
  }

  p {
    text-align: center;
    margin: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Confirm = styled.div`
  width: 150px;
  height: 30px;

  text-align:center;
  line-height: 30px;
  color: #48962c;

  cursor: pointer;
  border: 1px solid #48962c;
  border-radius: 5px;

  &:hover {
    background-color: #48962c;
    color: #FFF;
  }
`;

export const Cancel = styled.div`
  position: relative;
  right: -5px;
  width: 30px;
  height: 30px;

  opacity: 0.6;
  cursor: pointer;

  border: 1px solid #f54242;
  border-radius: 5px;

  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 14px;
    top: 7px;
    content: ' ';
    height: 18px;
    width: 2px;
    background-color: #f54242;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;