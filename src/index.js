import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Heading from './components/Heading';
import rootReducers from './reducers';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducers)}>
    <BrowserRouter>
      <Heading></Heading>
      <Switch>
        <Route exact path='/' component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));