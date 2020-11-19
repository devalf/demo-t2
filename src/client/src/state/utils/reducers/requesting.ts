import {RequestStatus} from 'types/http';

export const requestStartReducer = (state) => ({
    ...state,
    requestStatus: RequestStatus.Requesting
});

export const requestErrorReducer = (state, {payload: {error: err}}) => ({
    ...state,
    requestStatus: RequestStatus.Error,
    error: err?.message
});
