import React from 'react';
import Splash from './splash/splash'
import Nav from './nav/nav_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
    <div>
        <div>
            <Route path='/' component={Nav}/>       
            <Route exact path="/" component={Splash} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/signin" component={SigninContainer} />
        </div>
        <div className='footer'>
            <img src='/trees-footer.png' alt="" />
        </div>
    </div>
);
