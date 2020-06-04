import React from 'react';

import {Product} from 'state/productsData/types';

const ProductCard = (props: Product) => {
    const {title, price} = props;

    return (
        <div className={'col-sm-12 col-md-6 col-lg-3'}>
            <div className='card mb-4 box-shadow'>
                <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>{title}</h4>
                </div>
                <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                        ${price}
                        <small className='text-muted'> / mo</small>
                    </h1>
                    {/* TBD */}
                    {/* <ul className='list-unstyled mt-3 mb-4'>
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type='button' className='btn btn-lg btn-block btn-outline-primary'>
                        Sign up for free
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
