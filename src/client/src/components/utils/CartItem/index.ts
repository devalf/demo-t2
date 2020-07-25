import {connect} from 'react-redux';

import Component from './component';
import {removeFromCart, updateItemInCart} from 'state/cart/actions';

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (data) => dispatch(removeFromCart(data)),
    updateItemInCart: (data) => dispatch(updateItemInCart(data))
});

export default connect(null, mapDispatchToProps)(Component);
