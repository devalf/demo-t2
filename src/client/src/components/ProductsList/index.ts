import {connect} from 'react-redux';

import Component from './component';

import {selectProducts, selectIsLoading, selectTotalCount} from 'state/productsData/selectors';
import {fetchProducts} from 'state/productsData/actions';
import {addToCart} from 'state/cart/actions';

const mapStateToProps = (state) => ({
    isLoading: selectIsLoading(state),
    products: selectProducts(state),
    totalCount: selectTotalCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (opts) => dispatch(fetchProducts(opts)),
    addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
