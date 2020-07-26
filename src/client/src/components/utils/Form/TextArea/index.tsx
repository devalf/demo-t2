import React, {ReactElement} from 'react';
import {FieldProps} from 'formik';
import {FormGroup, FormTextarea} from 'shards-react';
import cx from 'classnames';

import styles from '../styles.scss';

type Props = {
    label: string;
} & FieldProps;

const index = (props: Props): ReactElement => {
    const {field, form, label, ...rest} = props;
    const {value='', name, ...fieldRest} = field;
    const error = form.errors[field.name];

    const internalProps = {
        name,
        value,
        id: name,
        ...(error && {invalid: true})
    };

    return (
        <FormGroup className={cx('pb-1', styles.container)}>
            <label htmlFor={name}>{label}</label>
            <FormTextarea {...fieldRest} {...rest} {...internalProps} />

            {error && <span className={cx('text-danger small', styles.errorMsg)}>{error}</span>}
        </FormGroup>
    );
};

export default index;
