import React from 'react';
import img from './/../../../src/assets/image/error.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
       
             <div>
            <div className='flex justify-center  items-center lg:mt-20'>
            <img className='w-96' src={img} alt="" />
            </div>
           <div className='text-2xl text-center'>
              {/* Error Message */}
      <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
      <p className="text-lg mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
           <Link to='/'><button className='btn btn-accent'><h2 >Go Back Home</h2></button></Link>
           </div>
        </div>
            
        
    );
};

export default ErrorPage;