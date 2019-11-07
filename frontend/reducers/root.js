import { combineReducers } from 'redux';
import sessionReducer from './session';
import uiReducer from './ui';
import entitiesReducer from './entities';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer
});