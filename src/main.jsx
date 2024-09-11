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
import C from './Component/C/C.jsx';
import Python from './Component/Python/Python.jsx';
import Java from './Component/Java/Java.jsx';
import Ai from './Component/Ai/Ai.jsx';
import DevOps from './Component/DevOps/DevOps.jsx';
import Cloud from './Component/Cloud/Cloud.jsx';
import Cybersecurity from './Component/Cybersecurity/Cybersecurity.jsx';
import Penetration from './Component/Penetration/Penetration.jsx';
import MachineL from './Component/MachineL/MachineL.jsx';
import Network from './Component/Network/Network.jsx';
import System from './Component/System/System.jsx';
import Database from './Component/Database/Database.jsx';
import Graphic from './Component/Graphic/Graphic.jsx';
import UI from './Component/UI/UI.jsx';
import Video from './Component/Video/Video.jsx';
import Content from './Component/Content/Content.jsx';
import Project from './Component/Project/Project.jsx';
import Product from './Component/Product/Product.jsx';
import HrManager from './Component/HrManager/HrManager.jsx';
import Business from './Component/Business/Business.jsx';
import Consultant from './Component/Consultant/Consultant.jsx';
import Client from './Component/Client/Client.jsx';
import Technical from './Component/Technical/Technical.jsx';
import Quality from './Component/Quality/Quality.jsx';
import Marketing from './Component/Marketing/Marketing.jsx';
import About from './Component/About/About.jsx';
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
      },
      {
        path:'/c' ,
        element:<C></C>
      },
      {
        path:'/python' ,
        element:<Python></Python>
      },
      {
        path:'/java' ,
        element:<Java></Java>
      },
      {
        path:'/ai' ,
        element:<Ai></Ai>
      },
      {
        path:'/dev',
        element:<DevOps></DevOps>
      },
      {
        path:'/cloud',
        element:<Cloud></Cloud>
      },
      {
        path:'/cyber',
        element:<Cybersecurity></Cybersecurity>
      },
      {
        path:'/pene',
        element:<Penetration></Penetration>
      },
      {
        path:'/machine',
        element:<MachineL></MachineL>
      },
      {
        path: '/network',
        element:<Network></Network>
      },
      {
        path: '/system',
        element:<System></System>
      },
      {
        path: '/database',
        element:<Database></Database>
      },
      {
        path:'/graphic',
        element:<Graphic></Graphic>
      },
      {
        path:'/ui',
        element:<UI></UI>
      },
      {
        path:'/video',
        element:<Video></Video>
      },
      {
        path:'/content',
        element:<Content></Content>
      },
      {
        path: '/project',
        element:<Project></Project>
      },
      {
        path: '/product',
        element:<Product></Product>
      },
      {
        path: '/hr',
        element:<HrManager></HrManager>
      },
      {
        path: '/business',
        element:<Business></Business>
      },
      {
        path: '/it',
        element:<Consultant></Consultant>
      },
      {
        path: '/client',
        element:<Client></Client>
      },
      {
        path: '/tech',
        element:<Technical></Technical>
      },
      {
        path: '/quality',
        element:<Quality></Quality>
      },
      {
        path: '/seo',
        element:<Marketing></Marketing>
      },
      {
        path: '/about',
        element: <About></About>
      }
   
   

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
