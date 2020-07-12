import {createReducer} from 'state/utils/createReducer';
import {cart as initialState} from './initialState';
import {State, Actions} from './types';

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
    // eslint-disable-next-line no-unused-vars
    const {contents: {[id]: removedItem, ...rest}} = state;

    return {
        ...state,
        contents: {
            ...rest
        }
    };
};

export const cart = createReducer(initialState, {
    [Actions.addToCart]: addToCart,
    [Actions.removeFromCart]: removeFromCart
});
