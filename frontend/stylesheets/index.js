import styled from "styled-components";

// export const ProfileContent = styled.div`
	/* @media screen and (max-width: 425px) {
    width: 93%;
    margin: 20px auto 25px;

    box-shadow: 0 -2px 6px rgba(14,21,47,.02), 0 6px 18px 5px rgba(14,21,47,.1);
    border-radius: 10px;
		padding: 10px;

		border: 1px solid green;
		
		transition: 1s;

    h2 {
	  margin-top: 0;
	  margin-bottom: 0;
    }
  } */
// `;

export const ImgMiniImageProfileBlockWrapper = styled.div`
	display: flex;
`;

export const ImgMiniImageProfileBlock = styled.img`
	width: 144px;
	height: 100%;
	border-radius: 3px;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 7.5px;
	}

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

export const ProfileMenu__Wrapper = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eaebee;

	height: 60px;

	margin-left: 28px;

	@media screen and (max-width: 425px) {
		margin: 0;
	}
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

	@media screen and (max-width: 425px) {
		font-size: 9px;
		margin: 14px;
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

// Фильтр - блок с тенью
export const FilterSectionWrapper = styled.div`
	width: 100%;
  box-shadow: 0 0px 6px rgba(14,21,47,.02), 0 6px 18px 1px rgba(14,21,47,.1);
  border-radius: 10px;

  padding: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 425px) {
    width: 90%;

    margin: 10px auto 10px;
    padding-left: 40px;
  }
`;

// Фильтр - title блока с тенью
export const FilterSectionWrapper__Title = styled.div`
	font-size: 15px;
  font-weight: 500;
  text-align: left;
  
  margin-bottom: 20px;

  @media screen and (max-width: 425px) {
    padding: 0;
    margin-left: -25px;
  }
`;

// Карта
export const MapContainer = styled.div`
	width: 900px;
  height: 600px;
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

// Переключатель карты/рейтинга
export const MapRatingToggleWrapper = styled.div`
	display: flex;
	align-items: center;

	width: 70px;
	height: 25px;

	cursor: pointer;
	border-radius: 15px;
	border: 1px solid #338EEE;
	background-color: #FFF;

	transition: 0.5s ease;

	padding: 0 1px;

	@media screen and (max-width: 425px) {
    margin-left: -25px;
  }
`;

export const Toggle = styled.div`
	width: 34px;
	height: 23px;

	${(props) => props.map ? 'margin-left: 36px' : 'margin-right: 0'};
	border-radius: ${(props) => props.map ? '3px 12px 12px 3px' : '12px 3px 3px 12px'};
	background-color: #78baff;

	transition: 0.5s ease;
`;

// Обертка карточек
export const ClubCardsWrapper = styled.div`
	display: flex;
  justify-content: center;
  align-content: flex-start;
	flex-wrap: wrap;
	
	>div {
		margin: 0 15px 40px;
	}

  @media screen and (min-width: 425px) {
    /* box-shadow: 0 0px 6px rgba(14,21,47,.02), 0 6px 18px 5px rgba(14,21,47,.1); */
    /* border-radius: 10px; */
    /* min-width: 940px; */

    /* margin-left: 40px; */
    padding: 40px 20px;
  }
`;

// Поле поиска
export const SearchInput = styled.input`
	margin: 0 auto;
	padding: 0;
	padding-left: 10px;

	width: 90%;
	height: 27px;
	border: 1px solid #338EEE;
	border-radius: 5px;

	font-size: 14px;

	@media screen and (max-width: 425px) {
    margin-left: -25px;
  }
`;

// Простой белый контейнер с тенью
export const WhiteContainer = styled.div`
	position: relative;
	
  border-radius: 7px;
  box-shadow: 0 0 18px -5px rgba(0,0,0,0.5);

	margin-bottom: 50px;

	padding: 0 40px;

	&:hover {
		.carouselShiftButton {
			opacity: 1;
		}
	}

	@media screen and (max-width: 425px) {
    padding: 30px;
  }
`;

// Обертка скриншотов в профиле
export const ScreenshotsWrapper = styled.div`
	position: relative;
	width: 750px;

	&:hover {
		.carouselShiftButton {
			opacity: 1;
		}
	}

	@media screen and (max-width: 425px) {
		padding: 30px;
		display: none;
  }
`;
