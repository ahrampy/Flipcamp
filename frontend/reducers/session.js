import { RECEIVE_CURRENT_USER,
    SIGNOUT_CURRENT_USER } from '../actions/session';

const _nullSession = {
    currentUser: null
};

const SessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.user
            return Object.assign({}, { currentUser });
        case SIGNOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default SessionReducer;