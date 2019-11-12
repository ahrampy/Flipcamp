import { connect } from 'react-redux';
import Nav from './nav';
import { signout } from '../../actions/session';
import { openModal } from '../../actions/modal';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);