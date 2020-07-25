type Validation = string | undefined;

export const composeValidators = (...args: Array<(value: any) => string | undefined>) => (value: any) => {
    for (const validator of args) {
        const error = validator(value);

        if (error) {
            return error;
        }
    }

    return undefined;
};

export const required = (value: string | number): Validation =>
    (value || typeof value === 'number' ? undefined : 'Required');

export const minLength = (min: number) => (value: string): Validation =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;


export const minValue = (min: number) => (value: number): Validation => {
    const error = `Must be at least ${min}`;

    if (value === 0) {
        return error;
    }

    return value && (value < min) ? error : undefined;
};
