import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter,RouterProvider
 } from 'react-router-dom'
import Nirmala from './Nirmala.jsx'

const router=createBrowserRouter([
{
  path:'/nirmala',
  element:<Nirmala/>
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)