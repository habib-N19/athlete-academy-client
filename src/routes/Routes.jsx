import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../pages/Authentication/Login'
import SignUp from '../pages/Authentication/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <h4 className='text-center text-6xl'>Error</h4>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  }
])

export default router
