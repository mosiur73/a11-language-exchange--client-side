import React, { useContext } from 'react';
import AuthContext from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';

const AddTutorials = () => {
  const { user } = useContext(AuthContext)
  const navigate=useNavigate()

  const handleSubmit = async e => {
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
    console.log(fromData)

    fetch('https://assignment11-language-exchange-server.vercel.app/language', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(fromData)
    })
      .then(res => res.json())

      .then(data => {
        console.log(data)
        if (data.insertedId) {

          Swal.fire({
            position: "top-start",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2000
          });
        }
        form.reset('')
        navigate("/myTutorial")

      })
  }
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12 mt-20'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize text-center'>
          Add Tutorials
        </h2>

       <Zoom>
       <form onSubmit={handleSubmit}>
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
                defaultValue={0}
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
            ></textarea>
          </div>

          <div className='flex justify-center mt-6'>
            <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              submit
            </button>
          </div>
        </form>
       </Zoom>
      </section>
    </div>
  );
};

export default AddTutorials;