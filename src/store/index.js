const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const reducer = require('../reducers');
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

module.exports = (initialState) => {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
