import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors'
import uiReducer from './ui';
import entitiesReducer from './entities';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});