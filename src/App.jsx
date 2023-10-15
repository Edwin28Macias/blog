import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'blog/:id',
    element: <Blog />,
  },
]) 

const App = () => {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
