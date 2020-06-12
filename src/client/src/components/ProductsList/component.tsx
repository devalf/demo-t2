import React, {Component, ReactNode} from 'react';

import Card from './card';
import Loader from 'components/utils/Loader';
import LoadMore from 'components/utils/LoadMore';
import {ProductNormalized} from 'state/productsData/types';
import {fetchProducts} from 'state/productsData/actions';

type Props = {
    setUI: () => void;
    fetchProducts: typeof fetchProducts;
    isLoading: boolean;
    products: [];
    totalCount: number;
};

export default class ProductsList extends Component<Props> {
    componentDidMount(): void {
        this.props.fetchProducts();
    }

    fetchMoreProducts = () => {
        this.props.fetchProducts({loadMore: true});
    }

    render(): ReactNode {
        const {products, isLoading, totalCount} = this.props;

        return <>
            {isLoading && <Loader />}
            {products && <div className={'row m-0 mt-4'}>
                {products.map((product: ProductNormalized) => <Card key={product.id} {...product} />)}
            </div>}

            <LoadMore
                onClick={this.fetchMoreProducts}
                disabled={products.length === totalCount}
            />
        </>;
    }
}
