import React, {ReactElement} from 'react';
import cx from 'classnames';
import {Field} from 'formik';


import {TextInput} from 'components/utils/Form';
import {CartItem} from 'state/cart/types';
import {composeValidators, required, minValue} from 'utils/validation';

import styles from './styles.scss';

type InputProps = {
    withInputCounter: boolean;
    inputFieldName: string;
};

type Props = {
    item: CartItem & {id: string};
    removeItemFromCart: ({}) => void;
    updateItemInCart: ({}) => void;
} & Partial<InputProps>;

const CartItem = (props: Props): ReactElement => {
    const {item, removeItemFromCart, updateItemInCart, withInputCounter, inputFieldName} = props;

    return (
        <>
            <hr />
            <div className='row main align-items-center'>
                <div className='col-2'>
                    <img className={cx('img-fluid', styles.itemImage)} src={item.picture} alt='' />
                </div>
                <div className='col'>
                    <div className='row'>{item.title}</div>
                </div>

                {withInputCounter && (
                    <Field
                        name={inputFieldName}
                        component={TextInput}
                        validate={composeValidators(required, minValue(1))}
                        type='number'
                        min={1}
                        onChangeHandler={(value: number) => updateItemInCart({id: item.id, count: Number(value)})}
                    />
                )}

                <div className='col'>
                    $ {item.price}
                    <span
                        className={cx('float-right text-danger', styles.close)}
                        onClick={() => removeItemFromCart({id: item.id})}
                    >
                        &#10005;
                    </span>
                </div>
            </div>
        </>
    );
};

export default CartItem;
