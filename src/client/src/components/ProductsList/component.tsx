import React, {Component, ReactNode} from 'react';

import Card from './card';
import Loader from 'components/utils/Loader';
import {ProductNormalized} from 'state/productsData/types';

type Props = {
    setUI: () => void;
    fetchProducts: () => void;
    isLoading: boolean;
    products: [];
};

export default class ProductsList extends Component<Props> {
    componentDidMount(): void {
        this.props.fetchProducts();
    }

    render(): ReactNode {
        const {products, isLoading} = this.props;

        return <>
            {isLoading && <Loader />}
            {products && <div className={'row m-0 mt-4'}>
                {products.map((product: ProductNormalized) => <Card key={product.id} {...product} />)}
            </div>}
        </>;
    }
}
