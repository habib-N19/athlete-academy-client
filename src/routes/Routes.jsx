import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../pages/Authentication/Login'
import SignUp from '../pages/Authentication/Signup'
import Home from '../pages/Home/Home/Home'
import TopInstructors from '../pages/Home/TopInstructors/TopInstructors'
import Dashboard from '../Layout/Dashboard'
import Classes from '../pages/Classes/Classes'
import Instructors from '../pages/Instructors/Instructors'
import SelectedClasses from '../pages/Dashboard/Student/SelectedClasses/SelectedClasses'
import EnrolledClasses from '../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses'
import AddClass from '../pages/Dashboard/Instructor/AddClass/AddClass'
import MyClasses from '../pages/Dashboard/Instructor/MyClasses/MyClasses'
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses/ManageClasses'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers/ManageUsers'
import PrivateRoute from './PrivateRoute'
import UpdateClass from '../pages/Dashboard/Instructor/MyClasses/UpdateClass'
import Payment from '../pages/Dashboard/Student/Payment/Payment'

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
        element: <Instructors></Instructors>
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <h2>error</h2>,
    children: [
      {
        path: 'selectedClasses',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: 'enrolled',
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'payClass',
        element: <Payment></Payment>
      },
      {
        path: 'addClass',
        element: (
          <PrivateRoute>
            <AddClass></AddClass>
          </PrivateRoute>
        )
      },
      {
        path: 'myClasses',
        element: <MyClasses></MyClasses>,
        children: [
          {
            path: 'updateClass',
            element: <UpdateClass></UpdateClass>
          }
        ]
      },
      {
        path: 'manageClasses',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      }
    ]
  }
])

export default router
