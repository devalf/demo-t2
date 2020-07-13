import React, {Component, ReactElement} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

type Props = {
    cartItemsCount: number;
} & RouteComponentProps;

class OrderPage extends Component<Props> {
    render(): ReactElement {
        return (
            <div className='m-4'>
                <h3>Order page</h3>

                <br />

                <h5><i>to be developed</i></h5>

                <div className='mb-3'>
                    Items in cart: {this.props.cartItemsCount}
                </div>

                <div>
                    <button className={'btn btn-primary'} onClick={() => this.props.history.goBack()}>Back</button>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderPage);
