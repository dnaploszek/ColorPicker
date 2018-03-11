import * as React from 'react';
import { Provider } from 'react-redux';

import App from '../../App';

import configureStore from '../../configureStore';

const store = configureStore();

export default class RootContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}