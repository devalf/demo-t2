import React, {Component, ReactElement} from 'react';
import {Formik, Field, Form} from 'formik';
import cx from 'classnames';

import {TextInput} from 'components/utils/Form';
import {composeValidators, required, minLength1} from 'utils/validation';

type Props = {
    disabled?: boolean;
};

export default class OrderForm extends Component<Props> {
    render(): ReactElement {
        const {disabled} = this.props;

        return (
            <Formik initialValues={{}} onSubmit={((values) => console.log(values))}>
                <Form className={cx({'disabled': disabled})}>
                    <Field
                        name='first_name'
                        label='First name'
                        component={TextInput}
                        validate={composeValidators(required, minLength1)}
                    />

                    <Field
                        name='last_name'
                        label='Last name'
                        component={TextInput}
                        validate={composeValidators(required, minLength1)}
                    />

                    <button
                        type='submit'
                        className='btn btn-md btn-block btn-secondary mt-5 mb-4'
                        onClick={() => console.log('order action TBD')}>
                        Submit
                    </button>
                </Form>
            </Formik>
        );
    }
}
