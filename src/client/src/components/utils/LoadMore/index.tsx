import React, {useState, useEffect, ReactElement} from 'react';
import cx from 'classnames';

import styles from './styles.scss';

type Props = {
    onClick: () => void;
    disabled?: boolean;
    isLoading: boolean;
};

const LoadMore = ({onClick, disabled, isLoading}: Props): ReactElement => {
    const [isLoadingByClick, setIsLoadingByClick] = useState(false);

    const onClickHandler = () => {
        setIsLoadingByClick(true);
        onClick();
    };

    useEffect(() => {
        if (!isLoading && isLoadingByClick) {
            setIsLoadingByClick(false);
        }
    }, [isLoading]);


    return (
        <div className='d-flex justify-content-center m-4'>
            <span
                className={cx(
                    'icon-spinner11 p-3',
                    styles.btn,
                    {'disabled': disabled},
                    {'rotate-animation': isLoadingByClick}
                )}
                onClick={onClickHandler}
            />
        </div>
    );
};

export default LoadMore;
