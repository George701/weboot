import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from '../store';

import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Alert from './layout/Alert';

import Register from './auth/Register';
import Login from './auth/Login';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Route exact path="/" component={Landing} />
                <section className="container">
                    <Alert />
                    <Switch>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </section>
            </Router>
        </Provider>
    )
}

export default App;
