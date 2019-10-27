import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Heading from './components/Heading';
import rootReducers from './reducers';
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import PersonDetail from './components/PersonDetail';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducers)}>
    <BrowserRouter>
      <Heading></Heading>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/:name' component={PersonDetail}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));