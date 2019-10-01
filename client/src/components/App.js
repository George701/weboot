import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from '../store';

import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Alert from './layout/Alert';
import Dashboard from './dashboard/Dashboard';
import CreateProfile from './profile-form/CreateProfile';
import EditProfile from './profile-form/EditProfile';
import AddExperience from './profile-form/AddExperience';
import AddEducation from './profile-form/AddEducation';
import PrivateRoute from './routing/PrivateRoute';

import Register from './auth/Register';
import Login from './auth/Login';

import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}


const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <section className="container">
                        <Alert />
                        <Switch>
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/login' component={Login} />
                            <PrivateRoute exact path='/dashboard' component={Dashboard} />
                            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                            <PrivateRoute exact path='/add-experience' component={AddExperience} />
                            <PrivateRoute exact path='/add-education' component={AddEducation} />
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    )
}

export default App;
