import {AxiosResponse} from 'axios';

export const extractDataFromRequest = (response: AxiosResponse) => {
    const {data: {data: responseData}} = response;

    return responseData;
};
