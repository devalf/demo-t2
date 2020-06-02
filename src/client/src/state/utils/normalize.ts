import {normalize, schema} from 'normalizr';

export type Normalized = {
    entities: any;
    result: any;
};

export const normalizeData = (data): Normalized => {
    const key = Object.keys(data).toString();
    const standardSchema = new schema.Entity(key);
    const Schema = {[key]: [standardSchema]};

    return normalize(data, Schema);
};
