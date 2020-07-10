import React from 'react';
import {ModalHeader, ModalBody, ModalFooter} from 'shards-react';
import {isEmpty} from 'lodash';

import {State} from 'state/cart/types';

type Props = {
    cartContents: State['contents'];
};

const CartModal = ({cartContents}: Props) => {
    return (
        <>
            <ModalHeader className='justify-content-center'>Cart</ModalHeader>
            <ModalBody>
                {Object.keys(cartContents).map((cartItem) => {
                    return <div className='mb-3' key={cartItem}>
                        <h5 className='d-inline pr-4'>{cartContents[cartItem].title}</h5>
                        <span>${cartContents[cartItem].price}</span>
                    </div>;
                })}

                {isEmpty(cartContents) && <i>cart is empty</i>}
            </ModalBody>
            <ModalFooter className='justify-content-start'>
                <i>this component is under active development... <br/> changes coming soon</i>
            </ModalFooter>
        </>
    );
};

export default CartModal;
