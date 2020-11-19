import React, {Component, ReactElement} from 'react';
import {Field, Form, Formik} from 'formik';
import cx from 'classnames';

import {TextArea, TextInput} from 'components/utils/Form';
import {composeValidators, email, required} from 'utils/validation';
import {Props as ComponentProps} from './component';
import {RequestStatus} from 'types/http';

type Props = {
    disabled?: boolean;
} & Pick<ComponentProps, 'makeOrder' | 'requestStatus'>;

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
                        className={cx(
                            'btn btn-md btn-block btn-secondary mt-5 mb-4',
                            {'disabled': this.props.requestStatus === RequestStatus.Requesting}
                        )}
                    >
                        Submit
                    </button>
                </Form>
            </Formik>
        );
    }
}
