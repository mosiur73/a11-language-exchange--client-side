import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center mt-52'>
             <div>
             <h2 className="text-5xl">Page not found</h2>
             <p className='text-3xl'>Status: 404</p>
             </div>
        </div>
    );
};

export default ErrorPage;