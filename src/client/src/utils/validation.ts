type Validation = string | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const composeValidators = (...args: Array<(value: any) => string | undefined>) =>
    (value: unknown): Validation => {
        for (const validator of args) {
            const error = validator(value);

            if (error) {
                return error;
            }
        }

        return undefined;
    };

export const required = (value: string | number | unknown): Validation =>
    (value || typeof value === 'number' ? undefined : 'Required');

// let it be here :)
// export const minLength = (min: number) => (value: string): Validation =>
//     value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minValue = (min: number) => (value: number): Validation => {
    const error = `Must be at least ${min}`;

    if (value === 0) {
        return error;
    }

    return value && (value < min) ? error : undefined;
};

export const email = (value: string): Validation =>
    value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value)
        ? 'Invalid email address'
        : undefined;
