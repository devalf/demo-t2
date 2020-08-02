import {connect} from 'react-redux';

import Component from './component';

import {
    selectCartItemsCount, selectCartContents, selectCartContentsTotalPrice, selectSuccessMessage
} from 'state/cart/selectors';
import {makeOrder} from 'state/cart/actions';

const mapStateToProps = (state) => ({
    cartItemsCount: selectCartItemsCount(state),
    cartContents: selectCartContents(state),
    totalPrice: selectCartContentsTotalPrice(state),
    successMessage: selectSuccessMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
    makeOrder: (formData) => dispatch(makeOrder(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
