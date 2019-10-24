import styled from "styled-components";
const imgPath = "/static/images/icons";

export const InputWrapper = styled.div`
    position: relative;
    cursor: pointer;
    margin-bottom: 10px;

    :before {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border: 1px solid #2196F3;
        border-radius: 4px;
        left: -25px;
        top: 2px;
        ${props => (props.checked) &&
					`background-color: #2196F3;
					background-size: 9px 9px;
					background-repeat: no-repeat;
					background-position: right 42% bottom 42%;
					background-image: url('${imgPath}/${props.img}.png');`}
        
    }
`;

export const Input = styled.div`
    ${props => (props.checked1) && 'background-color: #2196F3;'}
`;

export const FilterButton = styled.div`
    display: block;

		@media screen and (max-width: 425px) {
    display: block;
    color: #ffffff;

    border: 1px solid #338EEE;
    border-radius: 5px;

    min-height: 30px;
    min-width: 30px;

		cursor: pointer;
		
		&:hover {

		}

		${props =>
		`background-size: 20px 20px;
			background-repeat: no-repeat;
			background-position: center;
			background-image: url('${imgPath}/${props.img}.png');`}
		}
`;
