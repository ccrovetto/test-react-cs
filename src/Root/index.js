import React from '../../node_modules/react';
import { Provider } from '../../node_modules/react-redux'
import { createStore, applyMiddleware } from '../../node_modules/redux';
import thunk from '../../node_modules/redux-thunk';
import { logger } from '../../node_modules/redux-logger';
import reducers from '../store/reducers';
import Body from '../Containers/Body';
import './style.scss';

let store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    logger,
  ),
);

function Root() {
  return (
    <Provider store={store}>
      <div className="root">
        <Body />
      </div>
    </Provider>
  );
}

export default Root;
