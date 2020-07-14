import {connect} from 'react-redux';

import Component from './component';
import {removeFromCart} from 'state/cart/actions';

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (data) => dispatch(removeFromCart(data))
});

export default connect(null, mapDispatchToProps)(Component);
