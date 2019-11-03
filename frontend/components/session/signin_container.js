import { connect } from 'react-redux';
import { signin } from '../../actions/session';
import EntryForm from './entry_form';

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signin(user))
});

export default connect(null, mapDispatchToProps)(EntryForm);
