import {connect} from 'react-redux';

import Component from './component';

import {selectProducts, selectIsLoading} from 'state/productsData/selectors';
import {fetchProducts} from 'state/productsData/actions';

const mapStateToProps = (state) => ({
    isLoading: selectIsLoading(state),
    products: selectProducts(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (opts) => dispatch(fetchProducts(opts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
