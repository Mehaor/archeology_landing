import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {} from 'react-router-dom';
// import logo from './logo.svg';
import {Base, IndexPage} from './components';
import {Routes} from 'utils/constants';

import './index.css';

class App extends Component {

    render() {
        return (<HashRouter>
            <Base>
                <Switch>
                    <Route exact path={Routes.DEFAULT.path} component={IndexPage} />
                </Switch>
            </Base>
        </HashRouter>);
    }
}

export default App;
