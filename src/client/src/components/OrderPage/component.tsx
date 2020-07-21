import React, {Component, ReactElement} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import OrderForm from './form';
import CartItem from 'components/utils/CartItem';
import {State} from 'state/cart/types';

type Props = {
    cartItemsCount: number;
    cartContents: State['contents'];
} & RouteComponentProps;

class OrderPage extends Component<Props> {
    render(): ReactElement {
        const {cartContents} = this.props;

        return (
            <div className='m-4'>
                <h3>Order page</h3>

                <div className='mb-4'>
                    <i >This page is under active development, changes coming soon</i>
                </div>

                <div className='mb-3'>
                    Items in cart: {this.props.cartItemsCount}
                </div>

                <div className='mb-4 row'>
                    <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                        {Object.keys(cartContents).map((cartItemId) =>
                            <CartItem
                                key={cartItemId}
                                item={{...cartContents[cartItemId], id: cartItemId}}
                            />
                        )}
                    </div>
                </div>

                <OrderForm />

                <div>
                    <button className={'btn btn-primary'} onClick={() => this.props.history.goBack()}>Back</button>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderPage);
