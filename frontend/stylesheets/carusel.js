import styled from "styled-components";
const imgPath = "/static/images/icons";

export const ToLeftButton = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
  
    top: ${props => (props.isClub) ? '190px' : '130px'};
    left: ${props => (props.isClub) ? '10px' : '10px'};
  
    border-radius: 50%;
    background-color: #FFF;
    box-shadow: 0 3px 20px -5px #000000;
    cursor: pointer;

    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: bottom 50% right 55%;
    ${props => `background-image: url(${imgPath}/${props.img}.png)`};
`;
  
export const ToRightButton = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
  
    top: ${props => (props.isClub) ? '190px' : '130px'};
    right: ${props => (props.isClub) ? '10px' : '10px'};
  
    border-radius: 50%;
    background-color: #FFF;
    box-shadow: 0 3px 25px -5px #000000;
    cursor: pointer;

    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: center;
    ${props => `background-image: url(${imgPath}/${props.img}.png);`}
`;