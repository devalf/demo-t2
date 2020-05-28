import {connect} from 'react-redux';

import Component from './component';

import {selectProductsDataEntities} from 'state/productsData/selectors';
import {fetchProducts} from 'state/productsData/actions';

const mapStateToProps = (state) => ({
    products: selectProductsDataEntities(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
