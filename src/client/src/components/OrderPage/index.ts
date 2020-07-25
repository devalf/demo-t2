import {connect} from 'react-redux';

import Component from './component';

import {selectCartItemsCount, selectCartContents, selectCartContentsTotalPrice} from 'state/cart/selectors';

const mapStateToProps = (state) => ({
    cartItemsCount: selectCartItemsCount(state),
    cartContents: selectCartContents(state),
    totalPrice: selectCartContentsTotalPrice(state)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
