import styled from 'styled-components';

const Input = styled.input`
    border: 0;
    margin: 0;
    color: rgba(112, 112, 112, 1);
    font-size: .975rem;
    font-weight: 400;
    letter-spacing: .0125em;
    // font-family: 'Roboto', 'sans-serif';
    padding: 8px 16px;
    background: rgba(248, 248, 248, 1);
    border-radius: 20px;
    box-sizing: border-box;
    border: 1px solid #ccd0d5;
    width: 100%;
`;

const Label = styled.label`
    box-sizing: border-box;
    cursor: default;
    display: inset-block;
    position: relative;
    vertical-align: middle;
    // font-family: 'Roboto', 'sans-serif';
    width: 100%;
`;

Input.Label = Label;

export default Input;
