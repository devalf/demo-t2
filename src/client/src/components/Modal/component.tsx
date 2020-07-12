import React, {ReactElement} from 'react';
import {Modal} from 'shards-react';

import * as modals from './modals';

import styles from './styles.scss';

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
            <Modal
                open={!!openedModalId}
                toggle={toggleHandler}
                className={styles.modalContainer}
                backdropClassName={styles.overlay}
                centered
            >
                {Component && <Component toggle={toggleHandler} />}
            </Modal>
        </>
    );
};

export default ModalComponent;
