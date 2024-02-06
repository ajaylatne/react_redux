import React from 'react';
import ReactDOM from 'react-dom/client';
import AppNavbar from './AppNavbar/AppNavbar';
import AppRoutes from './AppRoutes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
  <BrowserRouter>
    
      <AppNavbar />
      <AppRoutes/>
    
  </BrowserRouter>
  </Provider>
);
