import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Blog from 'pages/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> },
      { path: '/blog', element: <Blog/> }
    ]
  },
  // { path: '*', element: <NotFound/> }
]);

function Routes() { return <RouterProvider router={router}/>; }

export default Routes;