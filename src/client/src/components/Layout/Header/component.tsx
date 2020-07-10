import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';

import {State} from 'state/cart/types';

import styles from './styles.scss';

type Props = {
    contents: State;
    openCartModal: () => void;
};

const Header = ({contents, openCartModal}: Props): ReactElement => {
    const cartItemsSum = Object.keys(contents).length;

    return (
        <header>
            <nav className='bg-secondary navbar navbar-dark'>
                <Link className='navbar-brand' to='/'>Home</Link>
                <div className={cx('d-flex', styles.cartContainer)} onClick={() => openCartModal()}>
                    <span className={cx('icon-cart text-light p-2', styles.cartIcon)} />
                    {(cartItemsSum > 0) && <div className={cx('', styles.cartItemsBadge)}>
                        {cartItemsSum}
                    </div>}
                </div>
            </nav>
        </header>
    );
};

export default Header;
