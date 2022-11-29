import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { store } from './store';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  OFFER_COUNT: 302
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offerCount={Settings.OFFER_COUNT}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>,
);
