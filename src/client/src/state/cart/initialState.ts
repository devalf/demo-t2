import {State} from './types';
import {RequestStatus} from '../../types/http';

export const cart: State = {
    contents: {},
    requestStatus: RequestStatus.Initial
};
