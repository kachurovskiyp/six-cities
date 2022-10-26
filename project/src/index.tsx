import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  OFFER_COUNT: 302
} as const;

root.render(
  <React.StrictMode>
    <App offerCount={Settings.OFFER_COUNT} />
  </React.StrictMode>,
);
