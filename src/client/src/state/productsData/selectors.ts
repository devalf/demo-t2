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

const selectProductId = (_, props) => {
    try {
        return props.match.params.id;
    } catch (e) {
        return null;
    }
};

export const selectProduct = createSelector(
    selectEntities,
    selectProductId,
    (entitiesMap, id) => id && entitiesMap?.[id]
);

export const selectIsLoading = createSelector(
    selectProductsData,
    ({isLoading}) => isLoading
);

export const selectTotalCount = createSelector(
    selectProductsData,
    ({totalCount}) => totalCount
);
