import React from 'react';
import cx from 'classnames';

import {Product} from 'state/productsData/types';

import styles from './styles.scss';

const ProductCard = (props: Product) => {
    const {
        title, price, picture, guid, about, tags, company
    } = props;

    const onAddToCartClick = () => {
        console.log(`Add to cart ${guid} - TBD`);
    };

    return (
        <div className={'col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch'}>
            <div className='card mb-4 box-shadow flex-fill'>
                <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>{title}</h4>
                </div>
                <div className='card-body'>
                    <img src={picture} alt='' className={'img-thumbnail mb-2'}/>
                    <div className={styles.description}>
                        {about}
                    </div>
                    {tags && <>
                        <small className={styles.tagsTitle}>Tags: </small>
                        <ul className={cx('list-unstyled list-inline', styles.tagsList)}>
                            {tags.map((tag, index) =>
                                <li key={tag + index} className={'list-inline-item'}>{tag}</li>
                            )}
                        </ul>
                    </>}
                </div>
                <div className='card-header'>
                    <div>
                        <small className='text-muted'>{company}</small>
                    </div>
                    <h2 className='card-title pricing-card-title'>
                        ${price}
                    </h2>
                    <button
                        type='button'
                        className='btn btn-lg btn-block btn-outline-primary'
                        onClick={onAddToCartClick}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
