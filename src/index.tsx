import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RootContainer from './containers/root/RootContainer';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <RootContainer/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
