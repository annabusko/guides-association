import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Preloader from "./components/Preloader";

import './index.css';

import createStore from './assets/store/configureStore';
const store = createStore();

const Layout = React.lazy(() => import('./components/Layout'));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={<Preloader />}>
        <Layout />
      </Suspense>
    </HashRouter>
  </Provider>
  ,
  document.getElementById("root")
);

serviceWorker.register();
