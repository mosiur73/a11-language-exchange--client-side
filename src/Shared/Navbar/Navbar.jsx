import React, { useContext } from 'react';
import { FaArrowRightFromBracket, FaLanguage } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('✅ Successfully signed out');
        toast.success('Signed out successfully');
      })
      .catch(error => {
        console.error('❌ Failed to sign out:', error);
        toast.error('Failed to sign out. Please try again.');
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/findTutors">Find Tutors</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addTutorials">Add Tutorials</NavLink>
          </li>
          <li>
            <NavLink to="/bookedTutor">My Booked</NavLink>
          </li>
          <li>
            <NavLink to="/myTutorial">My Tutorials</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar fixed top-0 z-10 left-0 right-0 bg-gray-200 shadow-lg">
      {/* Start: Logo and Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 w-52 bg-base-100 rounded-box shadow z-[1]"
          >
            {links}
          </ul>
        </div>
         <div className='flex gap-2'>
          <FaLanguage className="text-2xl text-teal-500" />
          <h3>Language<span className='text-teal-500'>Center</span></h3>
          </div>
      
      </div>

      {/* Center: Menu Links for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* End: Auth Buttons / User Avatar */}
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn btn-outline">
              Sign Out
            </button>
            <div
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user?.displayName}
              title={user?.displayName}
              className="w-10 h-10 rounded-full ml-2 overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
                alt={user?.displayName || 'User Avatar'}
                src={user?.photoURL || 'https://via.placeholder.com/40'}
              />
            </div>
            <Tooltip id="user-tooltip" />
          </>
        ) : (
          <>
           
            <Link to="/login">
              <button className="btn btn-outline flex items-center gap-2">
                <FaArrowRightFromBracket />
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
