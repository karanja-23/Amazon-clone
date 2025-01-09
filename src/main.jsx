import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const myroutes = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myroutes} />
  </StrictMode>,
)
