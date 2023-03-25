import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainContent from './components/main/MainContent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/misc/HomePage'
import ErrorPage from './components/misc/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cart/:cart',
        element: <MainContent />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
