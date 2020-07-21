import React, {Component, ReactElement} from 'react';
import {Formik, Field, Form} from 'formik';

import {TextInput} from 'components/utils/Form';
import {composeValidators, required, minLength1} from 'utils/validation';

type Props = {

};

export default class OrderForm extends Component<Props> {
    render(): ReactElement {
        return (
            <Formik initialValues={{}} onSubmit={((values) => console.log(values))}>
                <Form>
                    <Field id='firstName' name='firstName' placeholder='Jane' />

                    <Field
                        name={'last_name'}
                        component={TextInput}
                        validate={composeValidators(required, minLength1)}
                    />

                    <button>Submit</button>
                </Form>
            </Formik>
        );
    }
}
