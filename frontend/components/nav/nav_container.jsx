import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { signout } from '../../actions/session';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);