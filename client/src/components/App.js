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

import Profiles from './profiles/Profiles';
import Profile from './profile/Profile';

import Post from './post/Post'
import Posts from './posts/Posts';

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
                            <Route exact path='/profiles' component={Profiles} />
                            <Route exact path='/profile/:id' component={Profile} />
                            <PrivateRoute exact path='/dashboard' component={Dashboard} />
                            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                            <PrivateRoute exact path='/add-experience' component={AddExperience} />
                            <PrivateRoute exact path='/add-education' component={AddEducation} />
                            <PrivateRoute exact path='/posts' component={Posts} />
                            <PrivateRoute exact path='/posts/:id' component={Post} />
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    )
}

export default App;
