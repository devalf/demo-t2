import {createSelector} from 'reselect';

import {CartItem} from './types';
import {selectRequestStatus as selectRequestStatusProp} from 'state/utils/selectors';

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

export const selectRequestStatus = createSelector(
    selectCartState,
    selectRequestStatusProp
);

export const selectSuccessMessage = createSelector(
    selectCartState,
    ({successMessage}) => successMessage
);

export const selectErrorMessage = createSelector(
    selectCartState,
    ({error}) => error
);
