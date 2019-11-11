import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 500px;

  border-radius: 10px;
  background-color: #FFF;

  padding: 30px;

  z-index: 2;
`;

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

export const Title = styled.div`
  font-size: 28px;
  color: #505051;
`;

export const TitleInfo = styled.div`
  font-size: 14px;
  color: #505051;
`;

export const 