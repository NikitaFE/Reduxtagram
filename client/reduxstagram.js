import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

import './styles/style.styl';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'asdfas9d08f',
    userLevel: 'editor'
  }
}).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
