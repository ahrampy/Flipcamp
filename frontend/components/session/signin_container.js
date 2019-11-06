import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/session';
import EntryForm from './entry_form';
import { openModal, closeModal } from '../../actions/modal';

const mapStateToProps = () => ({
    formType: 'Sign In'
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signin(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <button
            id='entry-form-switch-button'
            onClick={() => dispatch(openModal('signup'))}>
            Sign Up
        </button>
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
