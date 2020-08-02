import React, {Component, ReactElement} from 'react';
import {Formik, Field, Form} from 'formik';
import cx from 'classnames';

import {TextInput, TextArea} from 'components/utils/Form';
import {composeValidators, required, email} from 'utils/validation';
import {Props as ComponentProps} from './component';

type Props = {
    disabled?: boolean;
} & Pick<ComponentProps, 'makeOrder'>;

export default class OrderForm extends Component<Props> {
    handleSubmit = (values) => {
        this.props.makeOrder(values);
    };

    render(): ReactElement {
        return (
            <Formik initialValues={{}} onSubmit={this.handleSubmit}>
                <Form className={cx({'disabled': this.props.disabled})}>
                    <Field
                        name='first_name'
                        label='First name *'
                        component={TextInput}
                        validate={composeValidators(required)}
                    />

                    <Field
                        name='last_name'
                        label='Last name *'
                        component={TextInput}
                        validate={composeValidators(required)}
                    />
                    <Field
                        name='email'
                        label='Email *'
                        component={TextInput}
                        validate={composeValidators(required, email)}
                    />

                    <Field
                        name='notes'
                        label='Notes'
                        component={TextArea}
                    />

                    <button
                        type='submit'
                        className='btn btn-md btn-block btn-secondary mt-5 mb-4'
                    >
                        Submit
                    </button>
                </Form>
            </Formik>
        );
    }
}
