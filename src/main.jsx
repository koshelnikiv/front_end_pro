import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);
