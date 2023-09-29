import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'
import './index.css'

// made a root element variable linked to html
// made the app variable which is my root React entrance
// made a router object from createBrowserRouter using premade route objects

 const root = document.getElementById('root')
 const app = createRoot(root)
 const router = createBrowserRouter(routes)

 // render the app

 app.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
 )