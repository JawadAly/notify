import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import myStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={myStore}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);