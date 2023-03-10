import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0Domain, auth0ClientId } from './config';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider domain={auth0Domain} clientId={auth0ClientId} redirectUri={window.location.origin}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);


reportWebVitals();
