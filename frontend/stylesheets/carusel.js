import styled from "styled-components";
const imgPath = "/static/images/icons";

export const CarouselWrapper = styled.div`
	position: relative;
`;

export const WrapperForButton = styled.div`
	overflow: hidden;
	${props => (props.wrapperPaddingTop) && `padding-top: ${props.wrapperPaddingTop}px`};
`;

export const CarouselMechanism = styled.div`
	display: flex;
	align-items: flex-start;

	width: 100%;
	transform: ${props => `translate3d(${props.position}px, 0px, 0px)`};
	transition: 0.9s ease-in-out;


	> div {
		${props => (props.spaceBetweenItems) && `margin-right: ${props.spaceBetweenItems}px`};
	}
`;

export const ToLeftButton = styled.div`
	position: absolute;
	opacity: 0;
	width: ${props => (props.size) && `${props.size}px`};
	height: ${props => (props.size) && `${props.size}px`};

	top: ${props => `${props.coordY}px`};
	left: ${props => `-${props.coordX}px`};

	border-radius: 50%;
	background-color: #FFF;
	box-shadow: 0 3px 20px -5px #000000;
	cursor: pointer;

	transition: 0.375s;

	background-size: 15px 15px;
	background-repeat: no-repeat;
	background-position: bottom 50% right 55%;
	${props => `background-image: url(${imgPath}/${props.img}.png)`};
`;

export const ToRightButton = styled.div`
	position: absolute;
	opacity: 0;
	width: ${props => (props.size) && `${props.size}px`};
	height: ${props => (props.size) && `${props.size}px`};

	top: ${props => `${props.coordY}px`};
	right: ${props => `-${props.coordX}px`};

	border-radius: 50%;
	background-color: #FFF;
	box-shadow: 0 3px 25px -5px #000000;
	cursor: pointer;

	transition: 0.375s;

	background-size: 15px 15px;
	background-repeat: no-repeat;
	background-position: center;
	${props => `background-image: url(${imgPath}/${props.img}.png);`}
`;