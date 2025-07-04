import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaGoogle, FaRegEye } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';
import AuthContext from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const {createUser,singInWithGoogle,setUser,updateUserProfile}=useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const photo = form.photo.value
    const password = form.password.value
    console.log({ email, password, name, photo })

    setErrorMessage('')

    if (password.length < 6) {
      setErrorMessage('Password should be 6 characters or longer');
      return;
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordRegex.test(password)) {
      setErrorMessage('At least one uppercase, one lowercase, one number, one special character');
      return;
  }
   
    try {
      //2. User Registration
      const result = await createUser(email, password)
      console.log(result)
      await updateUserProfile(name, photo)
      setUser({ ...result.user, photoURL: photo, displayName: name })
      toast.success('Signup Successful')
      navigate('/')
      const newUser={name,email,photo}

      fetch('https://assignment11-language-exchange-server.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(data => {
          console.log(data)
           if (data.insertedId) {
          
                    Swal.fire({
                      position: "top-start",
                      icon: "success",
                      title: "User Acount has created successfully",
                      showConfirmButton: false,
                      timer: 2000
                    });
                  }
            
        })
      
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
  

  const handleGoogleSignIn = async () => {
    try {
      await singInWithGoogle()

      toast.success('Signin Successful')
      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12 mt-20'>
        <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
          <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
            <div className='flex justify-center mx-auto'>
              {/* <img className='w-auto h-7 sm:h-8' src={logo} alt='' /> */}
            </div>
  
            <p className='mt-3 text-xl text-center text-gray-600 '>
              Get Your Free Account Now.
            </p>
  
            <div
              onClick={handleGoogleSignIn}
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
              <span className='w-1/5 border-b  lg:w-1/4'>
             
              </span>
  
              <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                or Registration with email
              </div>
  
              <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
            </div>
            <form  onSubmit={handleRegister}>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='name'
                >
                  Username
                </label>
                <input
                  id='name'
                  autoComplete='name'
                  name='name'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='photo'
                >
                  Photo URL
                </label>
                <input
                  id='photo'
                  autoComplete='photo'
                  name='photo'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
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
                           {
                errorMessage && <p className='text-red-600'>{errorMessage}</p>
            }
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  md:w-1/4'></span>
  
              <Link
                to='/login'
                className='text-xs text-gray-500 uppercase  hover:underline font-bold'
              >
                or Log in
              </Link>
  
              <span className='w-1/5 border-b  md:w-1/4'></span>
            </div>
          </div>
          <div
            className='hidden bg-cover bg-center lg:block lg:w-1/2'
         
            
          >
             <Lottie animationData={bgImg}></Lottie>
          </div>
        </div>
      </div>
    );
};

export default Register;