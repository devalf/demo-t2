import {Dispatch} from 'redux';
import {omit} from 'lodash';

import {
    Actions, IDType, UpdatePayload, AddToCart, RemoveFromCart, UpdateItemInCart, StartOrderRequest, ErrorOrderRequest
} from './types';
import {selectCartContents} from './selectors';
import API from 'utils/API';
import {extractDataFromRequest} from 'utils/dataHandlers';
import {order} from 'constants/endpoints';
import {ALERT_TIMEOUT} from 'constants/timers';
import {OrderFormFields} from 'types/orderFrom';
import {AppState} from 'types/state';

export const addToCart = (payload: IDType): AddToCart => ({
    type: Actions.addToCart,
    payload: {
        ...omit(payload, 'addToCart')
    }
});

export const removeFromCart = (payload: IDType): RemoveFromCart => ({
    type: Actions.removeFromCart,
    payload
});

export const updateItemInCart = (payload: UpdatePayload): UpdateItemInCart => ({
    type: Actions.updateItemInCart,
    payload
});

const startOrderRequest = (): StartOrderRequest => ({
    type: Actions.startOrderRequest
});

const errorRequest = (error): ErrorOrderRequest => ({
    type: Actions.errorOrderRequest,
    payload: {
        error
    }
});

const successOrderRequest = (payload: {message: string}) => ({
    type: Actions.successOrderRequest,
    payload: {
        message: payload.message
    }
});

const resetCartSuccessMessage = () => ({
    type: Actions.resetCartSuccessMessage
});

export const makeOrder = (formData: OrderFormFields) =>
    async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
        dispatch(startOrderRequest());

        const cartContents = selectCartContents(getState());

        try {
            const data = extractDataFromRequest(await API.post(order, {params: {
                ...formData,
                order: Object.keys(cartContents).map((productId) => ({[productId]: cartContents[productId].count}))
            }}));

            dispatch(successOrderRequest({message: data.message}));

            setTimeout(() => {
                dispatch(resetCartSuccessMessage());
            }, ALERT_TIMEOUT);
        } catch (err) {
            dispatch(errorRequest(err));
        }
    };
