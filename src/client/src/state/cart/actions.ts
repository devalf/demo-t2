import {Actions, Payload, AddToCart, RemoveFromCart} from './types';

export const addToCart = (payload: Payload): AddToCart => ({
    type: Actions.addToCart,
    payload
});

export const removeFromCart = (payload: Payload): RemoveFromCart => ({
    type: Actions.removeFromCart,
    payload
});
