import React, {Component, ReactElement} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import cx from 'classnames';

import Alert from 'components/utils/AlertComponent';
import ProductsForm from './productsForm';
import OrderForm from './orderForm';
import {State} from 'state/cart/types';

import styles from './styles.scss';

export type Props = {
    cartItemsCount: number;
    cartContents: State['contents'];
    totalPrice: number;
    makeOrder: ({}) => void;
    isLoading: boolean;
    successMessage: string;
    error: string;
} & RouteComponentProps;

class OrderPage extends Component<Props> {
    get isEmptyCart() {
        return this.props.cartItemsCount === 0;
    }

    render(): ReactElement {
        const {cartContents, totalPrice, successMessage, error} = this.props;

        return (
            <div className='m-4'>
                <h3>Order page</h3>

                <Alert text={successMessage} />
                <Alert text={error} theme='danger' />

                {this.isEmptyCart && <div className='mb-3 text-center'>
                    Cart is Empty
                </div>}

                <div className='mb-4 row'>
                    <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                        <ProductsForm cartContents={cartContents} />

                        {this.isEmptyCart || <>
                            <hr />

                            Total Price: $ {totalPrice}
                        </>}
                    </div>
                </div>

                <div className={cx('col-lg-6 offset-lg-3 col-md-8 offset-md-2 mt-5 p-4', styles.formContainer)}>
                    <OrderForm disabled={this.isEmptyCart} {...this.props} />
                </div>

                {this.isEmptyCart && (
                    <div className='text-center mt-3'>
                        <small>To unblock order form, please choose some product first</small>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(OrderPage);
