import styled from "styled-components";

export const SwiperWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
  overflow: hidden;
  
  /* padding: 30px 0; */
`;

export const SwiperMechanism = styled.div`
	display: flex;
  align-items: center;
  
  > div {
		margin-right: 7.5px;
	}

	@media screen and (max-width: 425px) {
		position: relative;
		width: 100%;
		transform: ${props => `translate3d(${props.position}px, 0px, 0px)`};
		transition: ${props => props.transition && '0.5s'};
	}
`;

export const SwiperCounter = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 15%;
	height: 15%;

	color: #FFF;

	background-color: rgba(0,0,0,0.7);
	border-radius: 4px;

	z-index: 1;
`;