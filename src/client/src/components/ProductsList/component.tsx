import React, {Component, ReactNode} from 'react';

import Card from './card';
import {ProductNormalized} from 'state/productsData/types';

type Props = {
    setUI: () => void;
    fetchProducts: () => void;
    products: [];
};

export default class ProductsList extends Component<Props> {
    componentDidMount(): void {
        this.props.fetchProducts();
    }

    render(): ReactNode {
        const {products} = this.props;

        return <>
            {products && <div className={'row m-0 mt-4'}>
                {products.map((product: ProductNormalized) => <Card key={product.id} {...product} />)}
            </div>}
        </>;
    }
}
