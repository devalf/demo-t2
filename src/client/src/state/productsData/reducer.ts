import {createReducer} from 'state/utils/createReducer';
import {normalizeData} from 'state/utils/normalize';
import {products as productsInitial, initialState} from './initialState';
import {actionTypes} from './actions';
import {requestStartReducer, requestErrorReducer} from 'state/utils/reducers/requesting';

const productsNormalized = normalizeData({products: productsInitial});
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
    [actionTypes.startRequest]: requestStartReducer,
    [actionTypes.successRequest]: insertProducts,
    [actionTypes.errorRequest]: requestErrorReducer
});
