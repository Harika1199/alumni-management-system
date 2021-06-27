import * as React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import UserLogin from '../components/login/login';
import App from '../components/App';
import About from '../pages/about';
import Registration from '../components/login/register';
import PageNotFound from '../pages/pageNotFound';
import Jobs from '../components/jobs/jobs';
import history from './history';
import JobContextProvider from '../components/jobs/useJob';

class Routes extends React.Component {
    render() {
        return (
            <JobContextProvider>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={App}></Route>
                        <Route exact path='/home' component={App}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/register' component={Registration}></Route>
                        <Route exact path='/login' component={UserLogin}></Route>
                        <Route exact path='/jobs' component={Jobs}></Route>
                        <Route exact path='/pageNotFound' component={PageNotFound}></Route>
                        <Redirect to="/pageNotFound"></Redirect>
                    </Switch>
                </Router>
            </JobContextProvider>
        );
    }
}

export default Routes;