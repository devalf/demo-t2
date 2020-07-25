export type CartItem = {
    title: string;
    price: string | number;
    picture: string;
    count: number;
};

export type Payload = {
    id: string;
};

export enum Actions {
    addToCart = 'ADD_TO_CART',
    removeFromCart = 'REMOVE_FROM_CART',
    updateItemInCart = 'UPDATE_ITEM_IN_CART'
}

export type AddToCart = {
    type: Actions.addToCart;
    payload: Payload;
};

export type RemoveFromCart = {
    type: Actions.removeFromCart;
    payload: Payload;
};

export type UpdateItemInCart = {
    type: Actions.updateItemInCart,
    payload: Payload & {count: number};
};

export type State = {
    contents: {
        [key: string]: CartItem
    }
};
