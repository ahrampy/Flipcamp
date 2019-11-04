import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import EntryForm from './entry_form';

const mapStateToProps = () => ({
    formType: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
