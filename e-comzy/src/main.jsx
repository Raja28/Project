import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './assets/pages/Home.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import { Cart } from './assets/pages/Cart.jsx'
import toast, { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster/>
  </Provider>,
)
