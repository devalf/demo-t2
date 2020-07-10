export enum Actions {
    openModal = 'OPEN_MODAL',
    closeModal = 'CLOSE_MODAL'
}

export type PayloadOpen = {
    id: string;
    data?: any;
};

export type OpenModal = {
    type: Actions.openModal;
    payload: PayloadOpen;
};

export type CloseModal = {
    type: Actions.closeModal;
};

export type State = {
    id: string;
};
