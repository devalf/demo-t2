import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

type Props = {
    onClick: () => void
};

const LoadMore = ({onClick}: Props) => {
    return (
        <div className='d-flex justify-content-center m-4'>
            <span className={cx('icon-spinner11 p-3', styles.btn)} onClick={onClick}></span>
        </div>
    );
};

export default LoadMore;
