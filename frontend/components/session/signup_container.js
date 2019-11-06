import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import EntryForm from './entry_form';
import { openModal, closeModal } from '../../actions/modal';

const mapStateToProps = () => ({
    formType: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <button onClick={() => dispatch(openModal('signin'))}>
            Signin
      </button>
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
