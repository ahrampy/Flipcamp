import { connect } from 'react-redux';
import { fetchSite, deleteSite } from '../../actions/sites';
import SiteShow from './site_show_pres';

const mSTP = (state, ownProps) => {
    return (
        { site: state.entities.sites[ownProps.match.params.siteId] }
    )
}

const mDTP = dispatch => ({
    fetchSite: (siteId) => dispatch(fetchSite(siteId)),
    deleteSite: (siteId) => dispatch(deleteSite(siteId))
})

export default connect(mSTP, mDTP)(SiteShow);
