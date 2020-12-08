import {normalize, schema} from 'normalizr';

export type Normalized = {
    entities: {
        // TODO find out correct type here
        // eslint-disable-next-line @typescript-eslint/ban-types
        [key: string]: object;
    };
    result: {
        [key: string]: string[];
    };
};

type Data = {
    [key: string]: unknown[];
};

export const normalizeData = (data: Data): Normalized => {
    const key = Object.keys(data).toString();
    const standardSchema = new schema.Entity(key);
    const Schema = {[key]: [standardSchema]};

    return normalize(data, Schema);
};
