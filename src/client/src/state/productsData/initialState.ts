import {State} from './types';

export const initialState: State = {
    isLoading: false,
    error: '',
    filters: {
        limit: 10,
        offset: 0
    }
};
