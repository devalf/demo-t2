import {combineReducers} from 'redux';

import {productsData} from './productsData/reducer';
import {ui} from './ui/reducer';
import {cart} from './cart/reducer';

export const reducers = combineReducers({
    productsData,
    ui,
    cart
});
