import React, {Component, ReactNode} from 'react';

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

        console.log(products);

        return <></>;
    }
}
