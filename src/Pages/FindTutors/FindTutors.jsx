import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FindTutorCard from './FindTutorCard';

const FindTutors = () => {
    const [language,setLanguage]=useState([])
    const [search, setSearch] = useState('')
    const [sortOrder, setSortOrder] = useState('asc'); 

    useEffect(()=>{
        const fetchAllLanguage = async () => {
            const { data } = await axios.get(`https://assignment11-language-exchange-server.vercel.app/language?search=${search}`)
            setLanguage(data)
          }
        fetchAllLanguage()
    },[search])

      // Sort the language array based on the sortOrder
      const sortedLanguages = [...language].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price.localeCompare(b.price); // Replace 'price' with the appropriate field
        } else {
            return b.price.localeCompare(a.price); // Replace 'name' with the appropriate field
        }
    });

   

     
      
    return (
        <div className='my-10'>
           <div className='flex gap-4 items-center '>
             {/* Sorting options */}
           <div className="flex justify-center items-center mb-6">
                <label htmlFor="sortOrder" className="mr-2 font-medium text-gray-700">
                    Sort By:
                </label>
                <select
                    id="sortOrder"
                    className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
           <form  className='flex justify-center my-6 mb-8' >
            <div className='flex p-1 w-80 justify-center items-start overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-600 focus-within:ring-blue-500'>
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
          
           
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                sortedLanguages.map(lang => <FindTutorCard key={lang._id} lang={lang}></FindTutorCard>)
            }
           </div>
        </div>
    );
};

export default FindTutors;