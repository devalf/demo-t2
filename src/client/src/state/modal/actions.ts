import {Actions, CloseModal, OpenModal, PayloadOpen} from './types';

export const openModal = ({id}: PayloadOpen): OpenModal => ({
    type: Actions.openModal,
    payload: {id}
});

export const closeModal = (): CloseModal => ({
    type: Actions.closeModal
});
