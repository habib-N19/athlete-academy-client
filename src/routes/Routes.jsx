import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../pages/Authentication/Login'
import SignUp from '../pages/Authentication/Signup'
import Home from '../pages/Home/Home/Home'
import Instructors from '../pages/Home/Instructors/Instructors'
import Dashboard from '../Layout/Dashboard'
import Classes from '../pages/Classes/Classes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <h4 className='text-6xl text-center'>Error</h4>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/instructors',
        element: <Instructors />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <h2>error</h2>,
    children: [{}]
  }
])

export default router
