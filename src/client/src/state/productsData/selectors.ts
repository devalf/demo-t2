import {createSelector} from 'reselect';

const selectProductsData = state => state.productsData;

export const selectProductsDataEntities = createSelector(
    selectProductsData,
    ({entities}) => entities
);
