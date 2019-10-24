import styled from "styled-components";

export const CardsInProfileWrapper = styled.div`
	@media screen and (max-width: 425px) {
    width: 93%;
    margin: 20px auto 25px;

    box-shadow: 0 -2px 6px rgba(14,21,47,.02), 0 6px 18px 5px rgba(14,21,47,.1);
    border-radius: 10px;
		padding: 10px;
		
		transition: 1s;

    h2 {
	  margin-top: 0;
	  margin-bottom: 0;
    }
  }
`;

export const Test = styled.div`
	width: 200px;
	height: 200px;
	background-color: red;
`;

export const ImgMiniImageProfileBlock = styled.img`
	width: 144px;
	height: 81px;

	border-radius: 3px;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 7.5px;
	}

	padding-bottom: 10px;

	@media screen and (max-width: 425px) {
		width: 19%;
		max-height: 45px;
	}
`;

export const ScreensotsWrapper = styled.div`
	position: relative;
`;

// Считаем координаты PictureUnderline
const getUnderlineCoords = (index) => {
	return index * 151.5;
}

export const PictureUnderline = styled.div`
	position: absolute;
	top: 90px;
	left: ${(props) => getUnderlineCoords(props.screenIndex) + 'px'};

	width: 144px;
	height: 2px;

	background-color: #2196F3;
	border-radius: 1px;
	transition: 0.5s ease-in;
`;

export const ShowTelButton = styled.button`
	width: 100%;
	height: 30px;

	background-color: #2196F3;
	color: #FFF;
	border-radius: 5px;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #38a7ff;
	}

	${props => (props.showTel) && 'display: none'};
`;
