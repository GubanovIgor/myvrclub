import styled from "styled-components";

export const ProfileContent = styled.div`
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

export const ScreenshotsWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;

	overflow-y: hidden;
`;

export const ImgMiniImageProfileBlock = styled.img`
	width: 144px;

	border-radius: 3px;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 7.5px;
	}

	padding-bottom: 10px;

	@media screen and (max-width: 425px) {
		min-width: 100%;
		width: 100%;

		padding: 0;
		margin: 0;
	}
`;

// Считаем координаты PictureUnderline
const getUnderlineCoords = (index) => {
	return index * 151.5;
}

export const PictureUnderline = styled.div`
	position: absolute;
	bottom: 0;
	left: ${(props) => getUnderlineCoords(props.screenIndex) + 'px'};

	width: 144px;
	height: 2px;

	background-color: #2196F3;
	border-radius: 1px;
	transition: 0.3s ease-in;
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

export const ProfileContent__Wrapper = styled.div`
	padding-bottom: 200px;
`;

export const ProfileMenu__Wrapper = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eaebee;

	height: 60px;

	margin-left: 28px;
`;

export const ProfileMenu__Item = styled.p`
	height: 100%;

	cursor: pointer;
	font-weight: 300;
	font-size: 17px;
	line-height: 60px;

	margin: 0;
	margin-right: 30px;

	${(props) => (props.menuSection === props.section) && `font-weight: 400;
		color: #338EEE;
		border-bottom: 1px solid #338EEE;`}

	&:hover {
		color: #338EEE;
	}
`;

export const ProfileMenu__SectionTitle = styled.div`
	display: flex;

  margin: 40px auto;
	padding-left: 15px;
	
	@media screen and (max-width: 425px) {
		align-items: center;
    margin: 0 auto;
    padding: 10px 0 20px;

    h2 {
      margin-left: 15px;
    }
	}
`;

// Модальное окно карты
export const MapModal__Wrapper = styled.div`
	position: relative;
	top: -493px;
	left: 79px;
		
	width: 200px;

	box-shadow: 0 -2px 6px rgba(14,21,47,.02), 0 6px 18px 5px rgba(14,21,47,.1);
	border-radius: 10px;
	background-color: #FFF;

	padding: 10px;
`;

export const MapModal__Title = styled.p`
	font-size: 14px;
	font-weight: 500;
`;

export const MapModal__Img = styled.img`
	width: 100%;
`;

export const MapModal__Info = styled.div`
	font-size: 11px;

	span {
		font-weight: 600;
	}
`;