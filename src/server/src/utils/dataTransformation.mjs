import pick from 'lodash/pick.js';

export const transformCollectionPickKeys = (collection=[], keys) => {
    if (!collection.length) {
        return [];
    }

    return collection.map((entity) => transformEntityPickKeys(entity, keys));
};

export const transformEntityPickKeys = ({_id: id, ...rest}={}, keys) => ({
    id,
    ...pick(rest, keys)
});
