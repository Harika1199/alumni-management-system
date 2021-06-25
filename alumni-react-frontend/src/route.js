import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import UserLogin from './login/login';
import App from './App';
import About from './about';
import Registration from './register';
import PageNotFound from './pageNotFound';
import Jobs from './jobs/jobs';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/register' component={Registration}></Route>
                    <Route exact path='/login' component={UserLogin}></Route>
                    <Route exact path='/jobs' component={Jobs}></Route>
                    <Route exact path='/pageNotFound' component={PageNotFound}></Route>
                    <Redirect to="/pageNotFound"></Redirect>
                </Switch>
            </Router>
        );
    }
}

export default Routes;