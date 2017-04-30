import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './pages/app';
import NotFound from './pages/not-found';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <App />} />
      <Route render={() => <NotFound />} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
