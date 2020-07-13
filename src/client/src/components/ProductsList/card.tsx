import React from 'react';
import {NavLink} from 'react-router-dom';
import cx from 'classnames';
import moment from 'moment';

import {Product} from 'state/productsData/types';
import {standardDate} from 'constants/formatTime';
import {buildLinkToProductPage} from 'constants/routes';
import {Props as ComponentProps} from './component';

import styles from './styles.scss';

type Props = Product & Pick<ComponentProps, 'addToCart'>;

const ProductCard = (props: Props) => {
    const {about, company, id, picture, price, registered, tags, title, addToCart} = props;

    const onAddToCartClick = () => addToCart(props);

    return (
        <div className={'col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch'}>
            <div className='card mb-4 box-shadow flex-fill'>
                <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>{title}</h4>
                </div>
                <div className='card-body'>
                    <img
                        src={picture}
                        alt={`${title} product pic`}
                        className={cx('img-thumbnail mb-2 mx-auto d-block', styles.productImg)}
                    />
                    <div className={cx('mb-1', styles.description)}>
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
                    <div className={'mt-2'}>
                        <small className={cx('font-italic', styles.registered)}>
                            Registered: {moment(registered).format(standardDate)}
                        </small>
                    </div>
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
                        className='btn btn-md btn-block btn-outline-primary mb-4'
                        onClick={onAddToCartClick}>
                        Add to cart
                    </button>
                    <NavLink
                        className='btn btn-md btn-block btn-outline-info'
                        to={buildLinkToProductPage(id)}
                        role='button'
                    >
                        More
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
