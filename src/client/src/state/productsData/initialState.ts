import {State} from './types';
import {ENTITIES_LIMIT} from 'constants/fetchOptions';
import {RequestStatus} from 'types/http';

export const initialState: State = {
    requestStatus: RequestStatus.Initial,
    error: '',
    filters: {
        limit: ENTITIES_LIMIT,
        offset: 0
    },
    totalCount: 0
};
