import styled from "styled-components";

export const ToLeftButton = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
  
    top: ${props => (props.isClub) ? '190px;' : '130px;'}
    left: ${props => (props.isClub) ? '10px;' : '10px;'}
  
    border-radius: 50%;
    background-color: #FFF;
    box-shadow: 0 8px 20px -5px #000000;
    cursor: pointer;
`;
  
export const ToRightButton = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
  
    top: ${props => (props.isClub) ? '190px;' : '130px;'}
    right: ${props => (props.isClub) ? '10px;' : '10px;'}
  
    border-radius: 50%;
    background-color: #FFF;
    box-shadow: 0 8px 20px -5px #000000;
    cursor: pointer;
`;