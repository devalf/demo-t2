import pick from 'lodash/pick.js';

export const transformCollectionPickKeys = (collection=[], keys) => {
    if (!collection.length) {
        return [];
    }

    return collection.map(({_id: id, ...rest}) => ({
        id,
        ...pick(rest, keys)
    }));
};
