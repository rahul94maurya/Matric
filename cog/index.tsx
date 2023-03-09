import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style/style.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
      <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
      </BrowserRouter>
  )
