import styled from "styled-components";
// import doneTick from "/static/images/icons/done-tick.svg"

export const InputWrapper = styled.div`
    position: relative;
    cursor: pointer;

    :before {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border: 1px solid #2196F3;
        border-radius: 4px;
        left: -25px;
        top: 2px;
        background-color: ${props => (props.checked) && '#2196F3;'}
    }
`;

export const Input = styled.div`

    ${props => (props.checked1) && 'background-color: #2196F3;'}
`;
