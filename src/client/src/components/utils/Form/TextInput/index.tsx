import React, {ReactElement} from 'react';
import {FieldProps} from 'formik';
import {FormGroup, FormInput} from 'shards-react';
import cx from 'classnames';

import styles from './styles.scss';

type Props = {
    label: string;
} & FieldProps;

const TextInput = ({field, form, label, ...props}: Props): ReactElement => {
    const {value, ...fieldRest} = field;
    const error = form.errors[field.name];
    const internalProps = {
        ...(error && {invalid: true})
    };


    return (
        <FormGroup className={cx('pb-1', styles.container)}>
            <label htmlFor='username'>{label}</label>
            <FormInput {...fieldRest} {...props} {...internalProps} value={value || ''} />

            {error && <span className={cx('text-danger small', styles.errorMsg)}>{error}</span>}
        </FormGroup>
    );
};

export default TextInput;
