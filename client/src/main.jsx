import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import CheckoutPage from './components/CheckoutPage'
import Success from './pages/Success'
import Cancel from './pages/Cancel'



import { CartProvider } from './context/CartContext';

const router = createBrowserRouter([
  {
    path: '/cancel',
    element: <Cancel />
  },
  {
    path: '/success',
    element: <Success />
  },
  {
    path: '/',
    element: <App />
  },
  {
    path: '/checkout',
    element: <CheckoutPage />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)
