import { connect } from 'react-redux';
import { fetchSites, createSite } from '../../actions/sites';
import SiteIndex from './sites_index_pres';

const mSTP = state => {
    return ({
        sites: Object.values(state.entities.sites)
    })
};

const mDTP = dispatch => ({
    fetchSites: () => dispatch(fetchSites()),
    createSite: site => dispatch(createSite(site))
});

export default connect(mSTP, mDTP)(SiteIndex);