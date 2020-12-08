import {Requesting} from 'state/utils/reducers/types';
import {RequestStatus} from 'types/http';

export type CartItem = {
    title: string;
    price: string | number;
    picture: string;
    count: number;
};

export type IDType = {
    id: string;
};

export type UpdatePayload = IDType & {
    count: number;
}

export enum Actions {
    addToCart = 'ADD_TO_CART',
    removeFromCart = 'REMOVE_FROM_CART',
    updateItemInCart = 'UPDATE_ITEM_IN_CART',
    startOrderRequest = 'START_ORDER_REQUEST',
    successOrderRequest = 'SUCCESS_ORDER_REQUEST',
    errorOrderRequest = 'ERROR_ORDER_REQUEST',
    resetCartSuccessMessage = 'RESET_CART_SUCCESS_MESSAGE'
}

export type AddToCart = {
    type: Actions.addToCart;
    payload: IDType;
};

export type RemoveFromCart = {
    type: Actions.removeFromCart;
    payload: IDType;
};

export type UpdateItemInCart = {
    type: Actions.updateItemInCart,
    payload: UpdatePayload;
};

export type StartOrderRequest = {
    type: Actions.startOrderRequest
};

export type ErrorOrderRequest = {
    type: Actions.errorOrderRequest;
    payload: Requesting;
};

export type State = {
    contents: {
        [key: string]: CartItem
    };
    requestStatus: RequestStatus;
    successMessage?: string;
    error?: string;
};
