import React, {ReactElement} from 'react';
import {FieldProps} from 'formik';
import {FormGroup, FormInput} from 'shards-react';
import cx from 'classnames';

import styles from '../styles.scss';

type Props = {
    label: string;
    type: 'password' | 'email' | 'number' | 'url' | 'tel' | 'search' | 'date'
        | 'datetime' | 'datetime-local' | 'month' | 'week' | 'time';
    onChangeHandler?: (val: string | number) => void;
} & FieldProps;

const TextInput = (props: Props): ReactElement => {
    const {field, form, label, type, onChangeHandler, ...rest} = props;
    const {value='', name, ...fieldRest} = field;
    const error = form.errors[field.name];

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (onChangeHandler) {
            onChangeHandler(e.currentTarget.value);
        }

        field.onChange(e);
    };

    const internalProps = {
        name,
        value,
        id: name,
        ...(error && {invalid: true}),
        ...(type && {type}),
        ...(onChangeHandler && {onChange: handleOnChange})
    };

    return (
        <FormGroup className={cx('pb-1', styles.container)}>
            <label htmlFor={name}>{label}</label>
            <FormInput {...fieldRest} {...rest} {...internalProps} />

            {error && <span className={cx('text-danger small', styles.errorMsg)}>{error}</span>}
        </FormGroup>
    );
};

export default TextInput;
