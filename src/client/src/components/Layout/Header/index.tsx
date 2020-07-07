import {connect} from 'react-redux';

import Component from './component';

import {selectCartContents} from 'state/cart/selectors';

const mapStateToProps = (state) => ({
    contents: selectCartContents(state)
});

export default connect(mapStateToProps)(Component);
