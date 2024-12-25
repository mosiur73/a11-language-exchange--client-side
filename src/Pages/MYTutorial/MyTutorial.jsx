import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyTutorial = () => {
    const {user}=useContext(AuthContext)
    const [tutors,setTutors]=useState([])

     useEffect(()=>{
            fetch(`http://localhost:5000/language?email=${user?.email}`)
            .then(res =>res.json())
            .then(data =>{
                setTutors(data)
            })
        },[user?.email])

        const handleDelete=id =>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
               
                fetch(`http://localhost:5000/language/${id}`,{
                    method:'DELETE'
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log('delete is done',data)
                    if(data.deletedCount){
                         Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  const remainingTutor=tutors.filter(tutor =>tutor._id !== id)
                  setTutors(remainingTutor)
                    }
                })
                }
              });
        }
   console.log(tutors)
    return (
        <div>
            <h2 className='text-3xl text-center text-purple-300 font-medium'>My Tutorial: {tutors.length}</h2>
           
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>si</th>
        <th>Image</th>
        <th>Name</th>
        <th>language</th>
        <th>Price</th>
        <th>Review</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        tutors.map((tutor,index) =>   <tr key={tutor._id}>
             
             <td>{index + 1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={tutor.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>

            <td>
              <div>
                  <div className="font-bold">{tutor.name}</div>
                 
                </div>
            </td>

            <td>
              <div>{tutor.language}</div>
            </td>
            <td>
                <div>{tutor.price}</div>
            </td>
            <th>
              <button className="btn btn-info btn-xs">{tutor.review}</button>
            </th>
            <td>
            <Link to={`/update/${tutor._id}`}>
            <button className="btn btn-error btn-xs mr-2 p-2 text-center pb-5">Edit</button>
            </Link>
            <button onClick={()=>handleDelete(tutor._id)} className="btn btn-warning btn-xs pb-5 p-2">Delete</button>
            </td>
          </tr>)
      }

    
     
    </tbody>
   
  </table>
</div>
            </div>
        </div>
    );
};

export default MyTutorial;