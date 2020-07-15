import styled from 'styled-components';

const Collapsible = styled.div`
    background-color: #fff;
    height: auto;
    max-height: ${props => props.open ? '420px' : '42px'};
    overflow: hidden;
    transition: max-height .25s ease;
    border-radius: 5px;
    margin: 8px 0;
    padding: 0 16px;
    box-shadow: 0 1px 8px -1px rgba(52, 65, 108, 0.25);
    position: relative;
`;

const Label = styled.h1`
    line-height: 42px;
    font-size: 18px;
    font-weight: 500;
`;

const ChildWrap = styled.div`
    position: relative;
    overflow-y: auto;
`;

const Content = styled.div`
    max-height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    // display: inline-block;
`;

Collapsible.Label = Label;
Collapsible.Content = Content;
Collapsible.ChildWrap = ChildWrap;

export default Collapsible;
