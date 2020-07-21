export const composeValidators = (...args: Array<(value: any) => string | undefined>) => (value: any) => {
    for (const validator of args) {
        const error = validator(value);

        if (error) {
            return error;
        }
    }

    return undefined;
};

export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');

export const minLength = (min) => (value) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength1 = minLength(1);
export const minLength2 = minLength(2);
