import {normalize, schema} from 'normalizr';

export const normalizeData = (data) => {
    const key = Object.keys(data).toString();
    const standardSchema = new schema.Entity(key);
    const Schema = {[key]: [standardSchema]};

    return normalize(data, Schema);
};
