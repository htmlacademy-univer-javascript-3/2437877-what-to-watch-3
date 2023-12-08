import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {App} from '@components/App.tsx';
import {store} from '@store/store.ts';
import {getFilmsAction, getMyFilmsAction, getPromoFilmAction} from '@services/api-methods.ts';

store.dispatch(getFilmsAction());
store.dispatch(getMyFilmsAction());
store.dispatch(getPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <meta charSet="UTF-8"/>
      <title>WTW</title>
      <meta name="robots" content="noindex, nofollow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="css/main.css"/>
      <App/>
    </Provider>
  </React.StrictMode>
);
