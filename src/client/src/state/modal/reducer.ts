import {createReducer} from 'state/utils/createReducer';
import {Actions} from './types';
import {modal as initialState} from './initialState';
import {State} from './types';

const setModalOpen = (state, {payload: {id}}): State => ({
    ...state,
    id
});

const setModalClose = (state): State => ({
    ...state,
    id: ''
});

export const modal = createReducer(initialState, {
    [Actions.openModal]: setModalOpen,
    [Actions.closeModal]: setModalClose
});
