import React from 'react';

import { Modal } from './layout.js';

export default ({ handleClose, show, children }) => {
    const noop = e => e.stopPropagation();

    return (
        <Modal show={show} onClick={handleClose}>
            <Modal.Content onClick={e => noop(e)}>
                {children}
                <Modal.CloseButton onClick={handleClose}>
                    <i style={{ fontSize: '22px' }} className="material-icons">close</i>
                </Modal.CloseButton>
            </Modal.Content>
        </Modal>
    );
};