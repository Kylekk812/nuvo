import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom'
import './index.css';
import App from './App.js';

const router = createBrowserRouter([
  {
    path:'/development-test',
    element: <App />
  },
  {
    path:'*',
    element : <Navigate to='/development-test' /> 
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);

