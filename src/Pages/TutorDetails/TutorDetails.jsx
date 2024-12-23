import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TutorDetails = () => {
    const {name,image,review,language,price,description}=useLoaderData()
   
    
    return (
        <div className='flex justify-center my-10'>
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <h2 className='text-xl font-semibold'>{language}</h2>
    <p>{review}</p>
    <h2 className='text-xl font-semibold'>$USD :{price}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default TutorDetails;