import React, {Component, ReactElement} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import cx from 'classnames';

import ProductsForm from './productsForm';
import OrderForm from './orderForm';
import {State} from 'state/cart/types';

import styles from './styles.scss';

export type Props = {
    cartItemsCount: number;
    cartContents: State['contents'];
    totalPrice: number;
} & RouteComponentProps;

class OrderPage extends Component<Props> {
    get isEmptyCart() {
        return this.props.cartItemsCount === 0;
    }

    render(): ReactElement {
        const {cartContents, totalPrice} = this.props;

        return (
            <div className='m-4'>
                <h3>Order page</h3>

                <div className='mb-4'>
                    <i>This page is under active development, Order Form is not working yet. Changes coming soon</i>
                </div>

                {this.isEmptyCart && <div className='mb-3'>
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

                {this.isEmptyCart && <small>To unblock order form, please choose some product first</small>}

                <div className={cx('col-lg-6 offset-lg-3 col-md-8 offset-md-2 mt-5 p-4', styles.formContainer)}>
                    <OrderForm disabled={this.isEmptyCart} />
                </div>

                <div>
                    <button className={'btn btn-primary'} onClick={() => this.props.history.goBack()}>Back</button>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderPage);
