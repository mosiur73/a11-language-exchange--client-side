import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Provider/AuthContext';
import axios from 'axios';
import AxiosSecure from '../../component/Hooks/AxiosSecure';


const MyBookedTutor = () => {
    const {user}=useContext(AuthContext)
    const [booked,setBooked]=useState([])
    const axiosSecure=AxiosSecure()

    useEffect(()=>{
        // fetch(`https://assignment11-language-exchange-server.vercel.app/booked-tutor?email=${user?.email}`)
        // .then(res =>res.json())
        // .then(data =>{
        //     setBooked(data)
        // })
        // axios.get(`https://assignment11-language-exchange-server.vercel.app/booked-tutor?email=${user?.email}`,{withCredentials:true})
        // .then(res =>setBooked(res.data))
        axiosSecure.get(`/booked-tutor?email=${user?.email}`)
        .then(res =>setBooked(res.data))

    },[user?.email])
   

  //   const handleReview = async (tutorId) => {
  //     try {
  //         const response = await fetch(`https://assignment11-language-exchange-server.vercel.app/booked-tutor/${tutorId}`, {
  //             method: 'PATCH',
  //             headers: { 'Content-Type': 'application/json' },
  //         });
  //         if (response.ok) {
  //             // Increment review count locally for better UX
  //             setBooked(prevBooked =>
  //                 prevBooked.map(item =>
  //                     item._id === tutorId ? { ...item, review: (item.review || 0) + 1 } : item
  //                 )
  //             );
  //         }
  //     } catch (error) {
  //         console.error('Error updating review:', error);
  //     }
  // };
    return (
       
        <div>
        <h2 className='text-3xl text-center text-purple-300 font-medium'>My Booked Tutorial: {booked.length}</h2>
       
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
    <th>Action</th>
   
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
          <button  onClick={() => handleReview(book._id)} className="btn btn-info btn-xs">review</button>
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