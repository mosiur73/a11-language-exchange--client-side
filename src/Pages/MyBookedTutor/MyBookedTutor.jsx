import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Provider/AuthContext';
import axios from 'axios';
import AxiosSecure from '../../component/Hooks/AxiosSecure';
import { Zoom } from 'react-awesome-reveal';


const MyBookedTutor = () => {
    const {user}=useContext(AuthContext)
    const [booked,setBooked]=useState([])
    const axiosSecure=AxiosSecure()

    useEffect(()=>{
       
        // axios.get(`https://assignment11-language-exchange-server.vercel.app/booked-tutor?email=${user?.email}`,{withCredentials:true})
        // .then(res =>setBooked(res.data))
        axiosSecure.get(`/booked-tutor?email=${user?.email}`)
        .then(res =>setBooked(res.data))

    },[user?.email])
   


  
  // const handleReview = (tutorId) => {
    
  //   console.log(tutorId)
   
  // };
  const handleReview = (tutorId) => {
    console.log(tutorId); // Log tutorId to ensure it's passed correctly

    // Make the POST request using axios
    axios
      .post('https://assignment11-language-exchange-server.vercel.app/reviews', {
        tutorId: tutorId, // Pass tutorId to the backend
       
      })
      .then((response) => {
        console.log('Review submitted successfully:', response.data);
        alert('Review submitted successfully!');
      })
      .catch((error) => {
        // console.error('Error submitting review:', error);
        alert('Error submitting review.');
      });
  };

    return (
       
        <div>
        <h2 className='text-3xl text-center text-purple-300 font-medium mt-20'>My Booked Tutorial: {booked.length}</h2>
       
        <div>
        <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
  <tr>
   
    <th>SI</th>
    <th>Image</th>
    <th>Name</th>
    <th>language</th>
    <th>Price</th>
    <th>Review</th>
  
   
  </tr>
</thead>
<tbody>
  {/* row 1 */}
 
  {
    booked.map((book,index) => <tr key={book._id}>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={book.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>

        <td>
          <div>
              <div className="font-bold">{book.name}</div>
             
            </div>
        </td>

        <td>
          <div>{book.language}</div>
        </td>
        <td>
            <div>{book.price}</div>
        </td>
        <th>
          <button  onClick={() => handleReview(book.tutorId)} className="btn btn-info btn-xs">review</button>
        </th>
       
      </tr>)
  }


 
</tbody>

</table>
</div>
        </div>
    </div>
    );
};

export default MyBookedTutor;