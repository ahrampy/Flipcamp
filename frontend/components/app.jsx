import React from 'react';
import Splash from './splash/splash'
import Nav from './nav/nav_container';
import Modal from './modal/modal';
import SiteShow from '../components/sites/site_show_contain';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
    <div>
        <Modal />
        <Nav />
        <Route exact path='/' component={Splash} />
        <Route exact path='/sites/:siteId' component={SiteShow} />
        <div className='footer'>
            <img src='/trees-footer.png' alt='trees' />
        </div>
    </div>
);