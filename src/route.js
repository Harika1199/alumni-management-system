import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    NotFoundRoute
} from 'react-router-dom';
import UserLogin from './login/login';
import App from './App';
import About from './about';
import Registration from './register';
import PageNotFound from './pageNotFound';
import Jobs from './jobs/jobs';
import history from './history';

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={App}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/register' component={Registration}></Route>
                    <Route exact path='/login' component={UserLogin}></Route>
                    <Route exact path='/jobs' component={Jobs}></Route>
                    <Route exact path='/pageNotFound' component={PageNotFound}></Route>
                    <NotFoundRoute to="/pageNotFound"></NotFoundRoute>
                    <Redirect to="/pageNotFound"></Redirect>
                </Switch>
            </Router>
        );
    }
}

export default Routes;