import React from 'react';
import { Link } from 'react-router-dom';

const FindTutorCard = ({lang}) => {
    const {name,image,review,language,_id,price}=lang
    
    return (
     
      <div className="card bg-base-100 w-96 shadow-2xl">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{language}</h2>
        <p>Name:{name}</p>
        <p>price:{price}</p>
        <p>review:{review}</p>
        <div className="card-actions">
        <Link to={`/language/${_id}`}>
           
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Details</button>
            </Link>
        </div>
      </div>
                 </div>
    );
};

export default FindTutorCard;