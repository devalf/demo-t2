import {connect} from 'react-redux';

import Component from './component';
import {selectModalId} from 'state/modal/selectors';
import {closeModal} from 'state/modal/actions';

const mapStateToProps = (state) => ({
    openedModalId: selectModalId(state)
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
