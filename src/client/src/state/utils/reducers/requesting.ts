import {RequestStatus} from 'types/http';
import {State as CartState} from 'state/cart/types';
import {State as ProductsDataState} from 'state/productsData/types';

type StateProp = CartState | ProductsDataState;
type ReqErrorPayload = {
    payload: {
        error: Error
    }
};

export const requestStartReducer = (state: StateProp): StateProp => ({
    ...state,
    requestStatus: RequestStatus.Requesting
});

export const requestErrorReducer = (state: StateProp, {payload: {error: err}}: ReqErrorPayload): StateProp => ({
    ...state,
    requestStatus: RequestStatus.Error,
    error: err?.message
});
