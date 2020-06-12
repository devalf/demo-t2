import {createReducer} from 'state/utils/createReducer';
import {normalizeData} from 'state/utils/normalize';
import {initialState} from './initialState';
import {requestStartReducer, requestErrorReducer} from 'state/utils/reducers/requesting';
import {Actions} from './types';
import {ENTITIES_OFFSET} from 'constants/fetchOptions';

const productsNormalized = normalizeData({products: []});
const initialProductsState = {
    ...initialState,
    ...productsNormalized
};

const insertProducts = (state, {payload: {products, totalCount, isNew}}) => {
    const newProducts = normalizeData({products});

    return {
        ...state,
        totalCount,
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
        },
        filters: {
            ...state.filters,
            offset: isNew ? state.filters.offset + ENTITIES_OFFSET : state.filters.offset
        }
    };
};

export const productsData = createReducer(initialProductsState, {
    [Actions.startRequest]: requestStartReducer,
    [Actions.successRequest]: insertProducts,
    [Actions.errorRequest]: requestErrorReducer
});
