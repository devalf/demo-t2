import {Requesting} from 'state/utils/reducers/types';

export enum Actions {
    startRequest = 'START_REQUEST_PRODUCTS',
    successRequest = 'SUCCESS_REQUEST_PRODUCTS',
    errorRequest = 'ERROR_REQUEST_PRODUCTS'
}

export type Product = {
    about: string;
    company: string;
    guid: string;
    picture: string;
    price: number;
    registered: string;
    tags: Array<string>;
    title: string;
};

export type ProductNormalized = Product & {
    id: string;
};

export type Products = {
    products: Product[];
};

export type StartRequest = {
    type: Actions.startRequest;
};

export type AddProducts = {
    type: Actions.successRequest;
    payload: Products & {isNew?: boolean};
};

export type ErrorRequest = {
    type: Actions.errorRequest;
    payload: Requesting;
};

export type State = {
    isLoading: boolean;
    error: string;
    filters: {
        offset: number;
        limit: number;
    }
};

export type FetchProductsOptions = {
    loadMore?: boolean;
};
