import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {Product} from 'state/productsData/types';
import Loader from 'components/utils/Loader';
import Rating from 'components/utils/Rating';

type Props = {
    product: Product;
    fetchProduct: (id: string) => void;
    isLoading: boolean;
} & RouteComponentProps<{id: string}>;

const SingleProduct = ({product, fetchProduct, match, isLoading}: Props) => {
    useEffect(() => {
        fetchProduct(match.params.id);
    }, []);

    return (
        <div className='p-3'>
            {(isLoading && !product) && <Loader />}

            {product && <>
                <div>
                    <h4>{product.title}</h4>
                    <div className='price mb-3'>
                        <span className='mr-2'>
                            <span className='icon-coin-dollar'/>&nbsp;{product.price}
                        </span>
                        <span className='text-danger mr-2'><del>{product.price * 2}</del></span>
                        <span className='text-success'>50% OFF</span>
                    </div>
                    <div className='d-flex flex-row'>
                        <Rating className='mr-2' /> {/* just to mock UI */}
                        <span className='font-weight-light'>111 ratings &amp; 222 reviews</span>
                    </div>
                    <div className='d-flex align-items-center mt-3 delivery'>
                        <span className='icon-location2'/>
                        <span className='ml-2'>Delivery by 1 Jun<br /></span>
                        <span className='ml-2'>|<br /></span>
                        <span className='ml-2 mr-2 text-success'>FREE<br /></span>
                    </div>
                    <hr />
                    <div>
                        <img src={product.picture} alt={`product: ${product.title}`} />
                    </div>
                    <hr />
                    <div>
                        <span className='font-weight-bold'>Produced by:</span>
                        <span className='ml-2'>{product.company}</span>
                    </div>
                    <div className='jumbotron'>{product.about}</div>
                    <div className='mt-3'>
                        <button
                            className='btn btn-outline-primary mr-2'
                            type='button'
                            onClick={() => console.log('Add to cart - TBD')}
                        >
                            ADD TO CART
                        </button>
                        <button
                            className='btn btn-outline-success'
                            type='button'
                            onClick={() => console.log('Buy now - TBD')}
                        >
                            BUY NOW
                        </button>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default SingleProduct;
