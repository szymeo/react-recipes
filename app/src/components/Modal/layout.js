import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${props => props.show ? 'block' : 'none'}
`;

const ModalContent = styled.section`
    position: fixed;
    background: white;
    width: 420px;
    height: auto;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 16px;
    border-radius: 5px;
`;

const ModalCloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 4px;
`;

Modal.Content = ModalContent;
Modal.CloseButton = ModalCloseButton;

export {
    Modal
};

// .modal {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
// }

// .modal-main {
//     position: fixed;
//     background: white;
//     width: 420px;
//     height: auto;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);
// }
  
// .display-block {
//     display: block;
// }
  
// .display-none {
//     display: none;
// }