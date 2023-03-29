import App from './App'
import CreateCart from './components/main/CreateCart'
import MainContent from './components/main/MainContent'
import ErrorPage from './components/misc/ErrorPage'
import HomePage from './components/misc/HomePage'

export const routesConfig = [
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
      {
        path: '/create',
        element: <CreateCart />,
      },
    ],
  },
]
