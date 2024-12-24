import React, { useContext } from 'react';
import AuthContext from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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

    fetch('http://localhost:5000/language', {
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
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize text-center'>
          Add Tutorials
        </h2>

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
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="zh">Chinese</option>
                <option value="ja">Japanese</option>
                <option value="ar">Arabic</option>
                <option value="hi">Hindi</option>
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
      </section>
    </div>
  );
};

export default AddTutorials;