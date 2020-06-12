import {Dispatch} from 'redux';

import API from 'utils/API';
import {extractDataFromRequest} from 'utils/dataHandlers';
import {getAllProducts} from 'constants/endpoints';
import {StartRequest, AddProducts, ErrorRequest, Actions, FetchProductsOptions} from './types';
import {ENTITIES_OFFSET} from 'constants/fetchOptions';

const startRequest = (): StartRequest => ({
    type: Actions.startRequest
});

const addProducts = ({products, totalCount}, isNew): AddProducts => ({
    type: Actions.successRequest,
    payload: {
        products,
        totalCount,
        isNew
    }
});

const errorRequest = (error): ErrorRequest => ({
    type: Actions.errorRequest,
    payload: {
        error,
        isLoading: false
    }
});

export const fetchProducts = (options?: FetchProductsOptions) =>
    async (dispatch: Dispatch, getState): Promise<void> => {
        dispatch(startRequest());

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
