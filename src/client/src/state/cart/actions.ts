import {Actions, Payload, AddToCart} from './types';

export const actionTypes = {
    addToCart: Actions.addToCart
};

export const addToCart = (payload: Payload): AddToCart => ({
    type: Actions.addToCart,
    payload
});
