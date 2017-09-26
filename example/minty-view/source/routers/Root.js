import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import appStore from '../store/index';
import Main from './Main';
import Unauthor from './Unauthor';

const App = props => (
  <Provider store={appStore}>
    <HashRouter>
      <Switch>
        <Route path="/app" component={Main} />
        <Route path="/auth" component={Unauthor} />
        <Redirect to="/auth" />
      </Switch>
    </HashRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
