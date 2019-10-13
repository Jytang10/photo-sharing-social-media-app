import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Heading from './components/Heading';

ReactDOM.render(
  <BrowserRouter>
    <Heading></Heading>
  </BrowserRouter>
  , document.getElementById('root'));