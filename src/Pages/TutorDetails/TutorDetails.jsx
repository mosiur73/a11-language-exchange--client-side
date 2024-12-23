import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const TutorDetails = () => {
    const {user}=useContext(AuthContext)
    const {name,image,review,language,price,description,_id,email}=useLoaderData()
   
    const data = {
        name,
        language,
        price,
        tutorId: _id,
        image,
        tutorEmail: email,
        userEmail: user?.email,
    };
    
    const handleBooking = async () => {
      
        fetch('http://localhost:5000/booked-tutor',{
          method:'POST',
          headers:{
            'content-type' :'application/json'
          },
          body:JSON.stringify(data)
         })
         .then(res =>res.json())
         .then(data =>{
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
           
          
           
          }
          
         
         })
    };
    
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
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button onClick={handleBooking} className="btn btn-primary">Book</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default TutorDetails;