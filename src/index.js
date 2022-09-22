import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom'
import './index.css';
import App from './components/App.js';

const router = createBrowserRouter([
  //per instruction, website url should be /development-test/
  {
    path:'/development-test',
    element: <App />
  },
  //will redirect any other url to /development-test/
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

