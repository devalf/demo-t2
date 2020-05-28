import API from 'utils/API';
import {extractDataFromRequest} from 'utils/dataHandlers';
import {getAllProducts} from 'constants/endpoints';

export const actionTypes = {
    startRequest: 'START_REQUEST_PRODUCTS',
    successRequest: 'SUCCESS_REQUEST_PRODUCTS',
    errorRequest: 'ERROR_REQUEST_PRODUCTS'
};

const startRequest = () => ({
    type: actionTypes.startRequest,
    payload: {
        isLoading: true
    }
});

const addProducts = ({products}) => ({
    type: actionTypes.successRequest,
    payload: {
        products
    }
});

const errorRequest = (error) => ({
    type: actionTypes.errorRequest,
    payload: {
        error
    }
});

export const fetchProducts = () => async (dispatch) => {
    dispatch(startRequest());

    try {
        const data = extractDataFromRequest(await API.get(getAllProducts));

        dispatch(addProducts(data));
    } catch (err) {
        dispatch(errorRequest(err));
    }
};
