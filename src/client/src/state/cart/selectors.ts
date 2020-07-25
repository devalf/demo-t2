import {createSelector} from 'reselect';

import {CartItem} from './types';

const selectCartState = (state) => state.cart;

export const selectCartContents = createSelector(
    selectCartState,
    ({contents}) => contents
);

export const selectCartItemsCount = createSelector(
    selectCartState,
    ({contents}) => Object.keys(contents).length
);


export const selectCartContentsTotalPrice = createSelector(
    selectCartContents,
    (contents) =>
        (Object.values(contents) as CartItem[]).reduce((acc: number, {price, count}: CartItem) => {
            return acc + (Number(price) * count);
        }, 0)
);
