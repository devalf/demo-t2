import {connect} from 'react-redux';

import Component from './component';

import {selectCartContents} from 'state/cart/selectors';

const mapStateToProps = (state) => ({
    cartContents: selectCartContents(state)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
