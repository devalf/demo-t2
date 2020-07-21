import React, {ReactElement} from 'react';
import {FieldProps} from 'formik';

const TextInput = ({field, form, ...props}: FieldProps): ReactElement => {
    const error = form.errors[field.name];

    const internalProps = {
        ...(error && {invalid: true})
    };

    return (
        <div>
            {/* TODO use here react-shards input */}
            <input {...field} {...props} {...internalProps} />

            {error && <span>{error}</span>}
        </div>
    );
};

export default TextInput;
