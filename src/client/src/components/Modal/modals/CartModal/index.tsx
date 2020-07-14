import {connect} from 'react-redux';

import Component from './component';

import {selectCartContents, selectCartItemsCount} from 'state/cart/selectors';

const mapStateToProps = (state) => ({
    cartContents: selectCartContents(state),
    cartItemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(Component);
