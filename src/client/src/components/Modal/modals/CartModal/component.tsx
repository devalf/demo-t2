import React from 'react';
import {ModalHeader, ModalBody, ModalFooter} from 'shards-react';

import CartItem from './CartItem';
import LinkButton from 'components/utils/LinkButton/component';
import {State} from 'state/cart/types';
import {orderPageRoute} from 'constants/routes';

type Props = {
    cartContents: State['contents'];
    cartItemsCount: number;
    toggle: () => void;
    removeItemFromCart: ({}) => void;
};

const CartModal = ({cartContents, cartItemsCount, toggle, removeItemFromCart}: Props) => {
    const itemRemoveHandler = (id: string) => () => {
        removeItemFromCart({id});
    };

    return (
        <>
            <ModalHeader toggle={toggle}>
                Shopping Cart
            </ModalHeader>
            <ModalBody>
                {cartItemsCount
                    ? <>
                        <div className='text-muted mb-4'>
                            {cartItemsCount}&nbsp;
                            item
                            {(cartItemsCount > 1) && 's'}
                        </div>

                        {Object.keys(cartContents).map((cartItemId) =>
                            <CartItem
                                key={cartItemId}
                                item={cartContents[cartItemId]}
                                onRemoveClick={itemRemoveHandler(cartItemId)}
                            />
                        )}
                    </>
                    : <i>cart is empty</i>
                }
            </ModalBody>
            {(cartItemsCount > 0) && <ModalFooter>
                <LinkButton
                    className={'btn-outline-success'}
                    to={orderPageRoute}
                    onButtonClick={toggle}
                >
                    BUY
                </LinkButton>
            </ModalFooter>}
        </>
    );
};

export default CartModal;
