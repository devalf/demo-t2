import {Requesting} from 'state/utils/reducers/types';
import {RequestStatus} from 'types/http';

export enum Actions {
    startRequestProducts = 'START_REQUEST_PRODUCTS',
    successRequestProducts = 'SUCCESS_REQUEST_PRODUCTS',
    errorRequestProducts = 'ERROR_REQUEST_PRODUCTS',
    resetProductsState = 'RESET_PRODUCTS_STATE',
    startRequestProduct = 'START_REQUEST_PRODUCT',
    successRequestProduct = 'SUCCESS_REQUEST_PRODUCT',
    errorRequestProduct = 'ERROR_REQUEST_PRODUCT'
}

export type ID = {
    id: string;
};

export type Product = {
    about: string;
    company: string;
    id: string;
    picture: string;
    price: number;
    registered: string;
    tags: Array<string>;
    title: string;
};

export type ProductNormalized = Product & ID;

export type Products = {
    products: Product[];
};

export type StartRequest = {
    type: Actions.startRequestProducts | Actions.startRequestProduct;
};

export type AddProducts = {
    type: Actions.successRequestProducts;
    payload: Products & {
        totalCount: number;
        isNew?: boolean;
    };
};

export type ErrorRequest = {
    type: Actions.errorRequestProducts;
    payload: Requesting;
};

export type State = {
    error: string;
    filters: {
        offset: number;
        limit: number;
    };
    requestStatus: RequestStatus;
    totalCount: number;
};

export type FetchProductsOptions = {
    loadMore?: boolean;
};


export type ResetProducts = {
    type: Actions.resetProductsState
};
