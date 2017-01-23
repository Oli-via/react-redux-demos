import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import {Router, Route, browserHistory} from 'react-router'
import Resources from './components/resources'

// if we pass a component to this function requireAuth, we will get our wrapped component back which is something that we can render
import requireAuth from './containers/require_auth'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        {/* the goal here is to call our resources component which is the one that we want to limit authentication
            or limit access to using our higher order component
         */}
        <Route path='resources' component={requireAuth(Resources)}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
