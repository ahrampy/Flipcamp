import {
    RECEIVE_SITES,
    RECEIVE_SITE,
    REMOVE_SITE
 } from '../actions/sites';

 const sitesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_SITES:
            return Object.assign({}, oldState, action.sites);
        case RECEIVE_SITE:
            const newSite = { [action.site.site.id]: action.site.site };
            return Object.assign({}, oldState, newSite);
        case REMOVE_SITE:
            const newState = Object.assign({}, oldState)
            delete(newState[action.siteId])
            return newState;
        default:
            return oldState;
    }
 };

 export default sitesReducer;