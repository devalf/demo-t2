import {State as CartState} from '../state/cart/types';
import {State as ProductsDataState} from '../state/productsData/types';

export type AppState = {
    cart: CartState,
    productsData: ProductsDataState
};
