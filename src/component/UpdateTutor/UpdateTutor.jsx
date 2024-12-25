import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const UpdateTutor = () => {
    const navigate=useNavigate()
    const data=useLoaderData()
    const {user}=useContext(AuthContext)
    const {review,price,name,description,language,image,email,_id}=data
     
    const handleUpdate =  e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const language = form.language.value;
        const price = form.price.value;
        const review = form.review.value;
        const image = form.image.value;
        const description = form.description.value;
    
        const fromData = { name, email, language, price, review, image, description }
        console.log(fromData);
        fetch(`https://assignment11-language-exchange-server.vercel.app/language/${_id}`,{
            method:'PUT',
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(fromData)
         })
         .then(res =>res.json())
         .then(data =>{
             console.log('update data i s done',data)
             if(data.modifiedCount > 0){
                 Swal.fire({
                     title: 'success!',
                     text: 'sport equipment update successfully',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                   })
             }
             navigate('/myTutorial')
         })
        
    }
    
    return (
        <div>
             <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize text-center'>
          Update Tutorials
        </h2>

        <form  onSubmit={handleUpdate}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>

            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                defaultValue={user?.displayName}
                disabled={true}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                defaultValue={user?.email}
                disabled={true}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
              language
              </label>
              <select
                name='language'
                id='language'
                defaultValue={language}
                className='border p-2 rounded-md'
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Arabic">Arabic</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>


            <div className=' '>
              <label className='text-gray-700 ' htmlFor='category'>
                Price
              </label>
              <input
                id='price'
                name='price'
                type='number'
                defaultValue={price}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Image
              </label>
              <input
                id='image'
                name='image'
                type='url'
                defaultValue={image}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                review
              </label>
              <input
                id='review'
                name='review'
                type='number'
                defaultValue={review}
                disabled={true}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

          </div>

          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              defaultValue={description}
            ></textarea>
          </div>

          <div className='flex justify-center mt-6'>
            <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
        </div>
    );
};

export default UpdateTutor;