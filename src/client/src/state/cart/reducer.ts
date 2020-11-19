import {omit} from 'lodash';
import {createReducer} from '@reduxjs/toolkit';

import {State, Actions} from './types';
import {cart as initialState} from './initialState';
import {requestErrorReducer, requestStartReducer} from 'state/utils/reducers/requesting';
import {RequestStatus} from 'types/http';

const addToCart = (state, {payload: {id, title, price, picture}}): State => ({
    ...state,
    contents: {
        ...state.contents,
        [id]: {
            title,
            price,
            picture,
            count: 1
        }
    }
});

const removeFromCart = (state, {payload: {id}}): State => {
    const {contents} = state;

    return {
        ...state,
        contents: {
            ...omit(contents, [id])
        }
    };
};

const updateCart = (state, {payload: {id, count}}) => {
    return {
        ...state,
        contents: {
            ...state.contents,
            [id]: {
                ...state.contents[id],
                count
            }
        }
    };
};

const makeOrderSuccess = (state, {payload: {message}}) => {
    return {
        ...state,
        requestStatus: RequestStatus.Success,
        contents: {},
        successMessage: message,
        error: undefined
    };
};

const resetCartSuccessMessage = (state) => {
    return {
        ...state,
        successMessage: undefined
    };
};

export const cart = createReducer(initialState, {
    [Actions.addToCart]: addToCart,
    [Actions.removeFromCart]: removeFromCart,
    [Actions.updateItemInCart]: updateCart,
    [Actions.startOrderRequest]: requestStartReducer,
    [Actions.successOrderRequest]: makeOrderSuccess,
    [Actions.errorOrderRequest]: requestErrorReducer,
    [Actions.resetCartSuccessMessage]: resetCartSuccessMessage
});
