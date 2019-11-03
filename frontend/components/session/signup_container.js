import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import EntryForm from './entry_form';

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user))
});

export default connect(null, mapDispatchToProps)(EntryForm);
