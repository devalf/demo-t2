import {createReducer} from 'state/utils/createReducer';
import {actionTypes} from './actions';
import {cart as initialState} from './initialState';
import {State} from './types';

const addToCart = (state, {payload: {id, title, price}}): State => ({
    ...state,
    contents: {
        ...state.contents,
        [id]: {
            title,
            price
        }
    }
});

export const cart = createReducer(initialState, {
    [actionTypes.addToCart]: addToCart
});
