import styled from 'styled-components';

const TextArea = styled.textarea`
    border: 0;
    margin: 0;
    color: rgba(112, 112, 112, 1);
    font-size: .975rem;
    font-weight: 400;
    letter-spacing: .0125em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    padding: 8px 16px;
    background: rgba(248, 248, 248, 1);
    border-radius: 20px;
    box-sizing: border-box;
    border: 1px solid #ccd0d5;
    width: 100%;
    resize: vertical;
    min-height: 80px
`;

export default TextArea;
