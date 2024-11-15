import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Calculator from 'pages/Calculator';
import Blog from 'pages/Blog';
import Article from 'pages/Article';
import NotFound from 'pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> },
      { path: '/calculator', element: <Calculator/> },
      { path: '/blog', element: <Blog/> },
      { path: '/blog/:id', element: <Article/> }
    ]
  },
  { path: '*', element: <NotFound/> }
]);

function Routes() { return <RouterProvider router={router}/>; }

export default Routes;