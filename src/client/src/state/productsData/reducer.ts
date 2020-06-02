import {createReducer} from 'state/utils/createReducer';
import {normalizeData} from 'state/utils/normalize';
import {initialState} from './initialState';
import {requestStartReducer, requestErrorReducer} from 'state/utils/reducers/requesting';
import {Actions} from './types';

const productsNormalized = normalizeData({products: []});
const initialProductsState = {
    ...initialState,
    ...productsNormalized
};

const insertProducts = (state, {payload: {products}}) => {
    const newProducts = normalizeData({products});

    return {
        ...state,
        isLoading: false,
        entities: {
            products: {
                ...state.entities.products,
                ...newProducts.entities.products
            }
        },
        result: {
            products: [
                ...state.result.products,
                ...newProducts.result.products
            ]
        }
    };
};

export const productsData = createReducer(initialProductsState, {
    [Actions.startRequest]: requestStartReducer,
    [Actions.successRequest]: insertProducts,
    [Actions.errorRequest]: requestErrorReducer
});
