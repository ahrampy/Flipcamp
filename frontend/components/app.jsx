import React from 'react';
// import Splash from './'
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import { Route, Switch} from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
    <div>
        <Switch>
            {/* <Route path="/" component={Nav} /> */}
            
            <Route path="/signup" component={SignupContainer} />
            <Route path="/signin" component={SigninContainer} />
            {/* <Route path="/" component={Splash} /> */}
        </Switch>
    </div>
);
