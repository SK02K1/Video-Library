import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { makeServer } from './server';
import './fonts/NaftaLight.woff';
import './index.css';
import { AuthProvider, CategoriesProvider, VideosProvider } from './contexts';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideosProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </VideosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
