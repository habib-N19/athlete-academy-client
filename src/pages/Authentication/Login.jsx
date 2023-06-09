import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SocialLogin from '../shared/SocialLogin/SocialLogin'
import useAuth from '../../hooks/useAuth'

const Login = () => {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = data => {
    console.log(data)
    signIn(data.email, data.password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
            Welcome Back!
          </h2>
          <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Login to your account
          </p>
        </div>

        <div className='relative max-w-md mx-auto mt-8 md:mt-16'>
          <div className='overflow-hidden bg-white rounded-md shadow-md'>
            <div className='px-4 py-6 sm:px-8 sm:py-7'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-5'>
                  <div>
                    <label className='text-base font-medium text-gray-900'>
                      {' '}
                      Email address{' '}
                    </label>
                    <div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                          className='w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                          />
                        </svg>
                      </div>

                      <input
                        type='email'
                        {...register('email', { required: true })}
                        name='email'
                        placeholder='Enter email'
                        className='block w-full p-4 pl-10 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      />
                      {errors.email && (
                        <span className='text-red-600'>Email is required</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className='flex items-center justify-between'>
                      <label className='text-base font-medium text-gray-900'>
                        {' '}
                        Password{' '}
                      </label>

                      <a
                        href='#'
                        title=''
                        className='text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline'
                      >
                        {' '}
                        Forgot password?{' '}
                      </a>
                    </div>
                    <div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                          className='w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
                          />
                        </svg>
                      </div>

                      <input
                        type='password'
                        {...register('password', {
                          required: true,
                          minLength: 6,
                          pattern:
                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })}
                        placeholder='Enter your password'
                        className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
                      />
                      {errors.password?.type === 'required' && (
                        <p className='text-red-600'>Password is required</p>
                      )}
                      {errors.password?.type === 'minLength' && (
                        <p className='text-red-600'>
                          Password minimum 6 characters
                        </p>
                      )}
                      {errors.password?.type === 'pattern' && (
                        <p className='text-red-600'>
                          Your password should have at least: one Uppercase one
                          lower case, one number and one special character.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700'
                    >
                      Log in
                    </button>
                  </div>
                  <div className='mt-3 space-y-3'>
                    <SocialLogin></SocialLogin>
                  </div>

                  <div className='text-center'>
                    <p className='text-base text-gray-600'>
                      Don’t have an account?{' '}
                      <Link
                        to='/signup'
                        title=''
                        className='font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline'
                      >
                        Create a free account
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
