import React from 'react';
import { Link } from 'react-router-dom';

const FindTutorCard = ({lang}) => {
    const {name,image,review,language,_id}=lang
    
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Tutor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className='flex justify-between'>
          <h2 className="card-title">{language}</h2>
          <h2 className="card-title">{review}</h2>

          </div>
          <div className="card-actions justify-end">
            <Link to={`/language/${_id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default FindTutorCard;