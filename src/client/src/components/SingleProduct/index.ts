import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Component from './component';

import {selectProduct, selectIsLoading} from 'state/productsData/selectors';
import {fetchProduct} from 'state/productsData/actions';

const mapStateToProps = (state, props) => ({
    isLoading: selectIsLoading(state),
    product: selectProduct(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
