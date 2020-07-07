import {createSelector} from 'reselect';

const selectCartState = (state) => state.cart;

export const selectCartContents = createSelector(
    selectCartState,
    ({contents}) => contents
);
