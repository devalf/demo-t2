import React, {Component, ReactElement} from 'react';
import {Formik, Form} from 'formik';

import CartItem from 'components/utils/CartItem';

import {Props as componentProps} from './component';

type Props = Pick<componentProps, 'cartContents'>;

export default class ProductsForm extends Component<Props> {
    getProductEntityName = (id: string): string => `product_id:${id}`;

    getInitialValues = () => {
        const {cartContents} = this.props;
        const initValuesMap = {};

        for (const entry in cartContents) {
            if (entry) {
                initValuesMap[this.getProductEntityName(entry)] = cartContents[entry].count;
            }
        }

        return initValuesMap;
    };

    render(): ReactElement {
        const {cartContents} = this.props;

        return (
            <Formik initialValues={this.getInitialValues()} onSubmit={((values) => console.log(values))}>
                <Form className=''>
                    {Object.keys(cartContents).map((cartItemId) =>
                        <CartItem
                            key={cartItemId}
                            item={{...cartContents[cartItemId], id: cartItemId}}
                            withInputCounter
                            inputFieldName={this.getProductEntityName(cartItemId)}
                        />
                    )}
                </Form>
            </Formik>
        );
    }
}
