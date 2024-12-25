import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottie from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';
import toast from 'react-hot-toast';
import AuthContext from '../../Provider/AuthContext';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const {singInUser,singInWithGoogle}=useContext(AuthContext)
  const navigate=useNavigate()
  const location = useLocation()
  const from=location.state || '/';
 

  const handleSignIn = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log({ email, password })
   

    singInUser(email, password)
    .then(result => {
        console.log('sign in', result.user)
        toast.success('Signin Successful')
        navigate(from)
    })
    .catch(error => {
        console.log(error);
        toast.error(error?.message)
    })
  }


  const handleGoogleLogin=()=>{
    singInWithGoogle()
    .then(res=>{
      toast.success('Signin Successful')
      navigate(from);
    })
    .catch((error) => {
      toast.error('Google Login Failed. Try again.');
    });
  }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
          <div
            className='hidden bg-cover bg-center lg:block lg:w-1/2' >
             <Lottie animationData={loginLottie}></Lottie>
          </div>
  
          <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
            <div className='flex justify-center mx-auto'>
             
            </div>
  
            <p className='mt-3 text-2xl font-bold text-center text-gray-600 '>
              Login pleace !
            </p>
  
            <div
              onClick={handleGoogleLogin}
              className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
            >
              <div className='px-4 py-2'>
              
                 <FcGoogle className='text-3xl'/>
              </div>
  
              <span className='w-5/6 px-4 py-3 font-bold text-center'>
                Sign in with Google
              </span>
            </div>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  lg:w-1/4'></span>
  
              <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                or login with email
              </div>
  
              <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
            </div>
            <form onSubmit={handleSignIn} >
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='LoggingEmailAddress'
                >
                  Email Address
                </label>
                <input
                  id='LoggingEmailAddress'
                  autoComplete='email'
                  name='email'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='email'
                />
              </div>
  
              <div className='mt-4 relative'>
                <div className=' '>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='loggingPassword'
                  >
                    Password
                  </label>
                </div>
  
                <input
                  id='loggingPassword'
                  autoComplete='current-password'
                  name='password'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type={showPassword ? 'text' : "password"} 
                />
                 <div
            onClick={() => setShowPassword(!showPassword)}
            className=' absolute right-4 top-10'>

            {
              showPassword ? <FaEyeSlash /> : <FaRegEye />
            }
          </div>
              </div>
             
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                >
                  Sign In
                </button>
              </div>
            </form>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  md:w-1/4'></span>
  
              <Link
                to='/register'
                className='text-xs text-gray-500 uppercase  hover:underline'
              >
                or sign up
              </Link>
  
              <span className='w-1/5 border-b  md:w-1/4'></span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;