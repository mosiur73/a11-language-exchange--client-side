import React, { useContext } from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';
import { FaLanguage } from 'react-icons/fa';

const Navbar = () => {
  const { user, signOutUser, theme, toggleTheme } = useContext(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('successful sign out')
        toast.success('successful sign out')
      })
      .catch(error => {
        console.log('failed to sign out .stay here. dont leave me alone')
      })
  }

  const links = < >
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/findTutors">Find tutors</NavLink></li>
    {user && (
      <>
        <li><NavLink to="/addTutorials">Add Tutorials</NavLink></li>
        <li><NavLink to="/bookedTutor">My booked </NavLink></li>
        <li><NavLink to="/myTutorial">My Tutorials </NavLink></li>
      </>
    )}

  </>
  return (
    <div className="navbar fixed top-0 z-10 left-0 right-0 bg-base-200 shadow-lg">
     
     <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl "> <FaLanguage className='text-2xl mr-2' />Language Center </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className='navbar'>
          <button onClick={toggleTheme} className="theme-toggle-btn  bg-gray-500">
            {theme === 'light' ? '🌙 ' : '☀️ '}
          </button>
        </div>
        {
          user ? <>

            <button onClick={handleSignOut} className="btn">Sign out</button>
            <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} title={user?.displayName} className='w-10 rounded-full ml-2'>
              <img className='rounded-full'
                referrerPolicy='no-referrer'
                alt='no Photo'
                src={user?.photoURL}
              />
            </div>
            <Tooltip id="my-tooltip" />
          </> : <>
            <Link to="/register"> <h2 className='text-red-300 text-xl mr-3'>Register ?</h2></Link>
            <Link to="/login">
              <button className='btn btn-outline'><FaArrowRightFromBracket /> Login</button>
            </Link>
          </>
        }


      </div>
    
    </div>
  );
};

export default Navbar;