import {connect} from 'react-redux';

import Component from './component';

import {selectCartItemsCount} from 'state/cart/selectors';

const mapStateToProps = (state) => ({
    cartItemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
