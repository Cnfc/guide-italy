import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

export default ({children, initialState={} }) => {
 
  const composeEnhancers = typeof window === 'object' &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

  const store = createStore(
    reducers, 
    initialState, 
    composeEnhancers(
      applyMiddleware( async, stateValidator )
      
    )
  );

  return (
    <Provider store={store}>
      {children }
    </Provider>
  )
}