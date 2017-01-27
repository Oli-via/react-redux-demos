import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import Feature from './components/feature';
import Index from './components/index'
import reducers from './reducers';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/type';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// app加载前检查是否有token
const store = createStoreWithMiddleware(reducers);
if ( localStorage.getItem('token') ){
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Index}/>
        <Route path='signin' component={SignIn} />
        <Route path='feature' component={Feature} />
        <Route path='signout' component={SignOut} />
        <Route path='signup' component={SignUp} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
