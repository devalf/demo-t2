import React, {ReactElement} from 'react';
import cx from 'classnames';

type Props = {
    className?: string;
    value: string | number;
};

/**
 * Exporting these values to provide random generating in SingleProduct component
 */
export const MIN_RATING_VALUE = 0;
export const MAX_RATING_VALUE = 5;

const Rating = ({className, value}: Props): ReactElement => {
    let ratingValue = Number(value);

    if ((ratingValue < MIN_RATING_VALUE) || !ratingValue) {
        ratingValue = MIN_RATING_VALUE;
    }

    if (ratingValue > MAX_RATING_VALUE) {
        ratingValue = MAX_RATING_VALUE;
    }

    const roundedRating = Math.round(ratingValue * 2) / 2;

    return (
        <div className={cx(className)}>
            {
                [...Array(MAX_RATING_VALUE)].map((el, i) => {
                    let starClassName = 'icon-star-empty';

                    if (i < roundedRating) {
                        starClassName = 'icon-star-full';
                    }

                    if ((i + .5) === roundedRating) {
                        starClassName = 'icon-star-half';
                    }

                    return <span key={i} className={starClassName} />;
                })
            }
        </div>
    );
};

export default Rating;
