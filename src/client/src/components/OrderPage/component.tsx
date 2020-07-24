import React, {Component, ReactElement} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import cx from 'classnames';

import OrderForm from './form';
import CartItem from 'components/utils/CartItem';
import {State} from 'state/cart/types';

import styles from './styles.scss';

type Props = {
    cartItemsCount: number;
    cartContents: State['contents'];
} & RouteComponentProps;

class OrderPage extends Component<Props> {
    get isEmptyCart() {
        return this.props.cartItemsCount === 0;
    }

    render(): ReactElement {
        const {cartContents} = this.props;

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
                        {Object.keys(cartContents).map((cartItemId) =>
                            <CartItem
                                key={cartItemId}
                                item={{...cartContents[cartItemId], id: cartItemId}}
                            />
                        )}

                        {this.isEmptyCart || <>
                            <hr />

                            Total Price: $ {Object.values(cartContents).reduce((acc, {price}) => {
                                return acc + Number(price);
                            }, 0)}
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
