'use strict';

const React = require('react');
const { Provider } = require('react-redux');
const ReactDOM = require('react-dom');
const LayoutComponent = require('./components/LayoutComponent');
const store = require('./store/index')();

ReactDOM.render(
  <Provider store={store}>
    <LayoutComponent/>
  </Provider>,
  document.getElementById('main-content')
);
