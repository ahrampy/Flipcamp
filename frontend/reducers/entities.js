import { combineReducers } from 'redux';
import sitesReducer from './sites';
import bookingsReducer from './bookings';

export default combineReducers({
    sites: sitesReducer,
    bookings: bookingsReducer
});
