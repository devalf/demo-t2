import {combineReducers} from '@reduxjs/toolkit';

import {productsData} from './productsData/reducer';
import {ui} from './ui/reducer';
import {cart} from './cart/reducer';
import {modal} from './modal/reducer';

const rootReducer = combineReducers({
    productsData,
    ui,
    cart,
    modal
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
