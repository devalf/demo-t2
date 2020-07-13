import {createReducer} from 'state/utils/createReducer';
import {cart as initialState} from './initialState';
import {State, Actions} from './types';
import {omit} from 'lodash';

const addToCart = (state, {payload: {id, title, price, picture}}): State => ({
    ...state,
    contents: {
        ...state.contents,
        [id]: {
            title,
            price,
            picture
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

export const cart = createReducer(initialState, {
    [Actions.addToCart]: addToCart,
    [Actions.removeFromCart]: removeFromCart
});
