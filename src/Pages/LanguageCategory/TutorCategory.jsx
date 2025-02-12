import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const TutorCategory = () => {
      const category=useLoaderData()
      // console.log(category)
    
      
    return (
        <div className='flex justify-center my-10'>
           
           <div className="card w-96 card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className='w-44 '
      src={category.image}
      alt="Not Found" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{category.language}</h2>
    <p>Tutor:{category.name}</p>
    <p>Price:{category.price}</p>
    <p>Review:{category.review}</p>
    
  </div>
</div>
        </div>
    );
};

export default TutorCategory;