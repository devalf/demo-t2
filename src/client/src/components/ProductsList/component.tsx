import React, {Component, ReactNode} from 'react';

import Card from './card';
import Loader from 'components/utils/Loader';
import LoadMore from 'components/utils/LoadMore';
import {ProductNormalized} from 'state/productsData/types';
import {fetchProducts, resetProductsState} from 'state/productsData/actions';

type Props = {
    setUI: () => void;
    fetchProducts: typeof fetchProducts;
    isLoading: boolean;
    products: [];
    totalCount: number;
    resetProductsState: typeof resetProductsState;
};

export default class ProductsList extends Component<Props> {
    componentDidMount(): void {
        this.props.fetchProducts();
    }

    componentWillUnmount() {
        this.props.resetProductsState();
    }

    fetchMoreProducts = () => {
        this.props.fetchProducts({loadMore: true});
    }

    render(): ReactNode {
        const {products, isLoading, totalCount} = this.props;
        const showLoading = !products.length && isLoading;

        return <>
            {showLoading && <Loader />}
            {products && <div className={'row m-0 mt-4'}>
                {products.map((product: ProductNormalized) => <Card key={product.id} {...product} />)}
            </div>}

            <LoadMore
                onClick={this.fetchMoreProducts}
                disabled={products.length === totalCount}
                isLoading={isLoading}
            />
        </>;
    }
}
