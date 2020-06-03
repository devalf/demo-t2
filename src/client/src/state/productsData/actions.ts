import API from 'utils/API';
import {extractDataFromRequest} from 'utils/dataHandlers';
import {getAllProducts} from 'constants/endpoints';
import {StartRequest, AddProducts, ErrorRequest, Actions} from './types';
import {Dispatch} from 'redux';

const startRequest = (): StartRequest => ({
    type: Actions.startRequest
});

const addProducts = ({products}): AddProducts => ({
    type: Actions.successRequest,
    payload: {
        products
    }
});

const errorRequest = (error): ErrorRequest => ({
    type: Actions.errorRequest,
    payload: {
        error,
        isLoading: false
    }
});

export const fetchProducts = () => async (dispatch: Dispatch): Promise<void> => {
    dispatch(startRequest());

    try {
        const data = extractDataFromRequest(await API.get(getAllProducts));

        dispatch(addProducts(data));
    } catch (err) {
        dispatch(errorRequest(err));
    }
};
