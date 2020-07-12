import {connect} from 'react-redux';

import Component from './component';

import {selectCartContents, selectCartItemsCount} from 'state/cart/selectors';
import {removeFromCart} from 'state/cart/actions';

const mapStateToProps = (state) => ({
    cartContents: selectCartContents(state),
    cartItemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (data) => dispatch(removeFromCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
