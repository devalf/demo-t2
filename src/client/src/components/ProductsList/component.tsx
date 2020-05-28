import React, {Component} from 'react';

type Props = {
    setUI: () => void;
    fetchProducts: () => void;
    products: [];
};

export default class ProductsList extends Component<Props> {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const {products} = this.props;

        console.log(products);

        return <div>
            LST
        </div>;
    }
}
