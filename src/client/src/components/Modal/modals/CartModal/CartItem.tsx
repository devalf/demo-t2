import React from 'react';
import cx from 'classnames';

import {CartItem} from 'state/cart/types';

import styles from './styles.scss';

type Props = {
    item: CartItem;
    onRemoveClick: () => void;
};

const CartItem = ({item, onRemoveClick}: Props) => {
    return (
        <>
            <hr />
            <div className='row main align-items-center'>
                <div className='col-2'>
                    <img className='img-fluid' src={item.picture} />
                </div>
                <div className='col'>
                    <div className='row'>{item.title}</div>
                </div>
                {/* TBD input field with counter incr/decr  <div className='col'>
                    INPT +-
                </div> */}
                <div className='col'>
                    $ {item.price}
                    <span
                        className={cx('float-right text-danger', styles.close)}
                        onClick={onRemoveClick}
                    >
                        &#10005;
                    </span>
                </div>
            </div>
        </>
    );
};

export default CartItem;
