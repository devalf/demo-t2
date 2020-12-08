import {createReducer} from '@reduxjs/toolkit';

import {normalizeData} from 'state/utils/normalize';
import {initialState} from './initialState';
import {requestStartReducer, requestErrorReducer} from 'state/utils/reducers/requesting';
import {Actions} from './types';
import {ENTITIES_OFFSET} from 'constants/fetchOptions';
import {RequestStatus} from 'types/http';

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
        requestStatus: RequestStatus.Success,
        entities: {
            products: {
                ...state.entities.products,
                ...newProducts.entities.products
            }
        },
        result: {
            products: [
                ...new Set([...state.result.products, ...newProducts.result.products])
            ]
        },
        filters: {
            ...state.filters,
            offset: isNew ? state.filters.offset + ENTITIES_OFFSET : state.filters.offset
        }
    };
};

const insertOrUpdateProduct = (state, {payload: {product}}) => {
    const newProductNormalized = normalizeData({products: [product]});

    return {
        ...state,
        requestStatus: RequestStatus.Success,
        entities: {
            products: {
                ...state.entities.products,
                ...newProductNormalized.entities.products
            }
        },
        result: {
            products: [
                ...new Set([...state.result.products, ...newProductNormalized.result.products])
            ]
        }
    };
};

export const productsData = createReducer(initialProductsState, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [Actions.startRequestProducts]: requestStartReducer,
    [Actions.successRequestProducts]: insertProducts,
    [Actions.errorRequestProducts]: requestErrorReducer,
    [Actions.resetProductsState]: () => initialProductsState,
    [Actions.startRequestProduct]: requestStartReducer,
    [Actions.successRequestProduct]: insertOrUpdateProduct
});
