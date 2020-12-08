import {AxiosResponse} from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const extractDataFromRequest = (response: AxiosResponse) => {
    const {data: {data: responseData}} = response;

    return responseData;
};
