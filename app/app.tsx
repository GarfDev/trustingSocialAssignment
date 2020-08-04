import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from '@/modules/@core/App';
// Cores
import {RecoilRoot} from 'recoil';
// router
// configureStore
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  MOUNT_NODE,
);

declare const module: any;
if (module.hot) {
  module.hot.accept([], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  });
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
