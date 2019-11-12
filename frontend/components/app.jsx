import React from 'react';
import Splash from './splash/splash'
import Nav from './nav/nav_container';
import Modal from './modal/modal';
import SiteShow from '../components/sites/site_show_contain';
import BookingsIndex from '../components/bookings/bookings_index_contain';
import { Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
    <div>
        <Modal />
        <header><Nav /></header>
        <Switch>
            <Route exact path='/' component={Splash} />
            <ProtectedRoute exact path='/bookings' component={BookingsIndex} />
            <Route exact path='/sites/:siteId' component={SiteShow} />
            <Redirect from='*' to='/' />
        </Switch>
        <div className='footer'></div>
    </div>
);