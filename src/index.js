import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { makeServer } from './server';
import './fonts/NaftaLight.woff';
import './index.css';
import { VideosProvider } from './contexts';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideosProvider>
        <App />
      </VideosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
