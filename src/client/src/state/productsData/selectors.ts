import {createSelector} from 'reselect';

const selectProductsData = (state) => state.productsData;

const selectResult = createSelector(
    selectProductsData,
    ({result}) => result.products
);

const selectEntities = createSelector(
    selectProductsData,
    ({entities}) => entities.products
);

export const selectProducts = createSelector(
    [selectResult, selectEntities],
    (result, entities) => result.map((id) => entities[id])
);


export const selectIsLoading = createSelector(
    selectProductsData,
    ({isLoading}) => isLoading
);
