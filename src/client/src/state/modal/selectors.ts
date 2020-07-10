import {createSelector} from 'reselect';

const selectModalState = (state) => state.modal;

export const selectModalId = createSelector(
    selectModalState,
    ({id}) => id
);
