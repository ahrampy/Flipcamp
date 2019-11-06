import React from 'react';
import Splash from './splash/splash'
import Nav from './nav/nav_container';
import Modal from './modal/modal';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
    <div>
        <Modal />
        <Nav />
        <Route path='/' component={Splash} />
        <div className='footer'>
            <img src='/trees-footer.png' alt='trees' />
        </div>
    </div>
);