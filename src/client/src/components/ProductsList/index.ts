import {connect} from 'react-redux';

import Component from './component';

import {selectProducts, selectIsLoading, selectTotalCount} from 'state/productsData/selectors';
import {fetchProducts, resetProductsState} from 'state/productsData/actions';

const mapStateToProps = (state) => ({
    isLoading: selectIsLoading(state),
    products: selectProducts(state),
    totalCount: selectTotalCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (opts) => dispatch(fetchProducts(opts)),
    resetProductsState: () => dispatch(resetProductsState())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
