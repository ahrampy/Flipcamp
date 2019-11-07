import { combineReducers } from 'redux';
import sitesReducer from './sites';

export default combineReducers({
    sites: sitesReducer
});
