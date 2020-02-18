import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session";
import EntryForm from "./entry_form";
import { openModal, closeModal } from "../../actions/modal";

const mapStateToProps = state => {
  return {
    errors: state.errors,
    formType: "Sign Up"
  };
};

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button
      id="entry-form-switch-button"
      onClick={() => dispatch(openModal("signin"))}
    >
      Sign In
    </button>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
