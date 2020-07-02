import React from 'react';
import cx from 'classnames';

type Props = {
    className?: string;
};

// Mock component, TBD
const Rating = ({className}: Props) => {
    return (
        <div className={cx(className)}>
            <span className='icon-star-full'/>
            <span className='icon-star-full'/>
            <span className='icon-star-full'/>
            <span className='icon-star-half'/>
            <span className='icon-star-empty'/>
        </div>
    );
};

export default Rating;
