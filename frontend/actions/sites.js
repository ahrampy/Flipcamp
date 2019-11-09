import * as APIUtil from '../utils/site_api';

export const RECEIVE_SITES = 'RECEIVE_SITES';
export const RECEIVE_SITE = 'RECEIVE_SITE';
export const REMOVE_SITE = 'REMOVE_SITE';

export const receiveSites = sites => ({
    type: RECEIVE_SITES,
    sites,
});

export const receiveSite = (site) => {
    return (
        {type: RECEIVE_SITE,
        site}
    )
};

export const removeSite = siteId => ({
    type: REMOVE_SITE,
    siteId
})

export const fetchSites = () => dispatch => (
    APIUtil.fetchSites()
        .then(sites => (dispatch(receiveSites(sites))))
);

export const fetchSite = id => dispatch => {
    return (
        APIUtil.fetchSite(id)
            .then(site => (dispatch(receiveSite(site))))
        )
};

export const createSite = site => dispatch => (
    APIUtil.createSite(site)
        .then(site => (dispatch(receiveSite(site))))
);

export const deleteSite = siteId => dispatch => (
    APIUtil.deleteSite(siteId)
        .then(() => (dispatch(removeSite(siteId))))
);