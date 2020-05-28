import {combineReducers} from 'redux';

import {productsData} from './productsData/reducer';
import {ui} from './ui/reducer';

export const reducers = combineReducers({
    productsData,
    ui
});
