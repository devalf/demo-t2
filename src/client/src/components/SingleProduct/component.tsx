import React, {useEffect} from 'react';
import {NavLink, RouteComponentProps} from 'react-router-dom';

import {Product} from 'state/productsData/types';

type Props = {
    product: Product;
    fetchProduct: (id: string) => void;
} & RouteComponentProps<{id: string}>;

const SingleProduct = ({product, fetchProduct, match}: Props) => {
    useEffect(() => {
        fetchProduct(match.params.id);
    }, []);

    return (
        <div className='p-5'>
            {product
                ? <>
                    <h3 className='text-muted bm-4'>{product.title}</h3>

                    <div>
                        {product.about}
                    </div>

                    <div className='mt-4 mb-4'>
                        <i>Still under development... Coming soon</i>
                    </div>

                    <NavLink to='/'>Back</NavLink>
                </>
                : <div>No data</div>}
        </div>
    );
};

export default SingleProduct;
