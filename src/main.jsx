import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Services from './Component/Services/Services.jsx';
import ErrorPage from '../src/Component/ErrorPage/ErrorPage.jsx'
import App from './Component/App/App.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Game from './Component/Game/Game.jsx';
import Mobile from './Component/Mobile/Mobile.jsx';
import Software from './Component/Software/Software.jsx';
import Full from './Component/Full/Full.jsx';
import Front from './Component/Front/Front.jsx';
import Back from './Component/Back/Back.jsx';
import Block from './Component/Block/Block.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/app',
        element: <App></App>
      },
      {
        path: '/game',
        element: <Game></Game>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path: '/mobile',
        element: <Mobile></Mobile>
      },
      {
        path: '/software',
        element: <Software></Software>
      },
      {
        path: '/full',
        element: <Full></Full>
      },
      {
        path: '/front',
        element: <Front></Front>
      },
      {
        path: '/back',
        element: <Back></Back>
      },
      {
        path: '/block',
        element: <Block></Block>
      }
   

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
