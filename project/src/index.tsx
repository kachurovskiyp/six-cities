import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  OFFER_COUNT: 302
} as const;

root.render(
  <React.StrictMode>
    <App
      offerCount={Settings.OFFER_COUNT}
      offers = {offers}
    />
  </React.StrictMode>,
);
