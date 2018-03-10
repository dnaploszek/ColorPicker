import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { AppState } from './reducers';

export default function configureStore(preloadedState?: AppState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
    )),
  );
}