import React, {ReactElement} from 'react';
import {Modal} from 'shards-react';

import * as modals from './modals';

type Props = {
    openedModalId: string;
    closeModal: () => void;
};

const ModalComponent = ({openedModalId, closeModal}: Props): ReactElement => {
    const Component = modals[openedModalId];

    const toggleHandler = () => {
        closeModal();
    };

    return (
        <>
            <Modal open={!!openedModalId} toggle={toggleHandler}>
                {Component && <Component data={[]}/>}
            </Modal>
        </>
    );
};

export default ModalComponent;
