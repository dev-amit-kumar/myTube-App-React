import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store'
import {Provider} from 'react-redux'
import Routing from './components/Routing'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);