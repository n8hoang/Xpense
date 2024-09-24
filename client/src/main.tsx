import App from './App.tsx'
import React from 'react'
import Home from './pages/Home.tsx'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/> ,
    children: [
      {index: true, element: <Home/>},
  
    ],
  },
  ]);


  ReactDOM.createRoot(document.getElementById('root') as Element).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )