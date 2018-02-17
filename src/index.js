/*
 * Dependencies
 */
// import React
import React from 'react';
// import ReactDOM
import { render } from 'react-dom';
// import Routers
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import react redux
import { Provider } from 'react-redux';
// import redux
import { createStore, applyMiddleware } from 'redux';
// thunkMiddleware
import thunkMiddleware from 'redux-thunk';
// import reducers
import willowApp from './reducers';
// import register service worker
import registerServiceWorker from './registerServiceWorker';
// testing actions
// import { toggleSidebar } from './actions';
/*
 * Styles
 */
// import index css
import './css/main.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
/*
 * App/Views
 */
// import App
import App from './App';
/*
 * Setup
 */
// create store
let store = createStore(willowApp,
  applyMiddleware(thunkMiddleware)
)
// store.dispatch(toggleSidebar())
// get the root id to append the App to
let $root = document.getElementById('root');
// append the App to the DOM element
// run the regisration for the service worker
registerServiceWorker();
render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  $root
)
