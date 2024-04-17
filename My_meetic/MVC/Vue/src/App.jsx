import FormRegister from './componentFormRegister.jsx'
import FormLog from './componentFormLogin.jsx'
import MainPage from './mainPage.jsx'
import Account from './account.jsx'
import Wait from './wait.jsx'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <FormRegister />
  },
  {
    path: '/login',
    element: <FormLog />
  },
  {
    path: '/mainPage/:id',
    element: <MainPage />
  },
  {
    path: '/account/:id',
    element: <Account />
  },
  {
    path: '/wait/:id',
    element: <Wait />
  },

]
)

function App() {
  return <RouterProvider router={router} />
}

export default App

