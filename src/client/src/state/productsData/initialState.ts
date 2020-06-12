import {State} from './types';
import {ENTITIES_LIMIT} from 'constants/fetchOptions';

export const initialState: State = {
    isLoading: false,
    error: '',
    filters: {
        limit: ENTITIES_LIMIT,
        offset: 0
    }
};
