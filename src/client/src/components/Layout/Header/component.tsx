import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';

import styles from './styles.scss';

type Props = {
    cartItemsCount: number;
    openCartModal: () => void;
};

const Header = ({cartItemsCount, openCartModal}: Props): ReactElement => {
    return (
        <header>
            <nav className='bg-secondary navbar navbar-dark'>
                <Link className='navbar-brand' to='/'>Home</Link>
                <div className={cx('d-flex', styles.cartContainer)} onClick={() => openCartModal()}>
                    <span className={cx('icon-cart text-light p-2', styles.cartIcon)} />
                    {(cartItemsCount > 0) && <div className={cx('', styles.cartItemsBadge)}>
                        {cartItemsCount}
                    </div>}
                </div>
            </nav>
        </header>
    );
};

export default Header;
