import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import UserLogin from './login/login';
import App from './App';


class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                     <Route exact path='/' component={App}></Route>
                     {/* <Route exact path='/about' component={About}></Route>
                 <Route exact path='/contact' component={Contact}></Route> */}
                    <Route exact path='/login' component={UserLogin}></Route>
                </Switch>
            </Router>
        );
    }
}

export default Routes;