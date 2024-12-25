import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FindTutorCard from './FindTutorCard';

const FindTutors = () => {
    const [language,setLanguage]=useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        const fetchAllLanguage = async () => {
            const { data } = await axios.get(`https://assignment11-language-exchange-server.vercel.app/language?search=${search}`)
            setLanguage(data)
          }
        fetchAllLanguage()
    },[search])
   

     
      
    return (
        <div className='my-10'>
            <form  >
            <div className='flex p-1 w-80 justify-center items-start overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
                onChange={e => setSearch(e.target.value)}
                value={search}
               
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                language.map(lang => <FindTutorCard key={lang._id} lang={lang}></FindTutorCard>)
            }
           </div>
        </div>
    );
};

export default FindTutors;