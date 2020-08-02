import {Dispatch} from 'redux';

import API from 'utils/API';
import {extractDataFromRequest} from 'utils/dataHandlers';
import {getAllProducts, getSingleProduct} from 'constants/endpoints';
import {
    ID, StartRequest, AddProducts, ErrorRequest, Actions,
    FetchProductsOptions, ResetProducts, Product
} from './types';
import {ENTITIES_OFFSET} from 'constants/fetchOptions';

const startRequestProducts = (): StartRequest => ({
    type: Actions.startRequestProducts
});

const addProducts = ({products, totalCount}, isNew): AddProducts => ({
    type: Actions.successRequestProducts,
    payload: {
        products,
        totalCount,
        isNew
    }
});

const insertOrUpdateProducts = (product: Product) => ({
    type: Actions.successRequestProduct,
    payload: {
        product
    }
});

const errorRequest = (error): ErrorRequest => ({
    type: Actions.errorRequestProducts,
    payload: {
        error
    }
});

export const resetProductsState = (): ResetProducts => ({
    type: Actions.resetProductsState
});

const startRequestProduct = (): StartRequest => ({
    type: Actions.startRequestProduct
});

export const fetchProducts = (options?: FetchProductsOptions) =>
    async (dispatch: Dispatch, getState): Promise<void> => {
        dispatch(startRequestProducts());

        const {productsData: {filters: filtersSate}} = getState();
        const filtersParams = {...filtersSate};
        const shouldLoadMore = options?.loadMore;

        if (shouldLoadMore) {
            filtersParams.offset = filtersParams.offset + ENTITIES_OFFSET;
        }

        try {
            const data = extractDataFromRequest(await API.get(getAllProducts, {params: {...filtersParams}}));

            dispatch(addProducts(data, shouldLoadMore));
        } catch (err) {
            dispatch(errorRequest(err));
        }
    };

export const fetchProduct = (id: ID['id']) => async (dispatch: Dispatch): Promise<void> => {
    dispatch(startRequestProduct());

    try {
        const {product} = extractDataFromRequest(await API.get(getSingleProduct(id)));

        dispatch(insertOrUpdateProducts(product));
    } catch (err) {
        console.error(err);
    }
};
