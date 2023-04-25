import App from './App'
import CreateCart from './components/main/CreateChart/CreateCart'
import MainContent from './components/main/MainContent/MainContent'
import ErrorPage from './components/misc/ErrorPage/ErrorPage'
import HomePage from './components/main/HomePage/HomePage'

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
