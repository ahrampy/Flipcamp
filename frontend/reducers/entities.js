import { combineReducers } from "redux";
import sitesReducer from "./sites";
import bookingsReducer from "./bookings";
import reviewsReducer from "./reviews";

export default combineReducers({
  sites: sitesReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer,
});
