import {combineReducers} from 'redux';

import {productsData} from './productsData/reducer';
import {ui} from './ui/reducer';
import {cart} from './cart/reducer';
import {modal} from './modal/reducer';

export const reducers = combineReducers({
    productsData,
    ui,
    cart,
    modal
});
