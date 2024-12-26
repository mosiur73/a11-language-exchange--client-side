import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Category = () => {
    const [languages,setLanguage]=useState([])
    
   
    useEffect(() => {
      const fetchAllLanguage = async () => {
          const { data } = await axios.get(`https://assignment11-language-exchange-server.vercel.app/language`);

          // Remove duplicates by using a Map
          const uniqueLanguages = Array.from(
              new Map(data.map((item) => [item.language, item])).values()
          );

          setLanguage(uniqueLanguages);
      };
      fetchAllLanguage();
  }, []);
  
  
    return (
        <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Language Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <Zoom>
        {languages.map((language) => (
         <Link to={`/tutorCategory/${language._id}`}  key={language._id}>
          <div 
            
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-all bg-white flex flex-col"
          >
          <div className='flex justify-between items-center py-6'>
          <div className='flex gap-5 items-center'>
            <img className='w-20' src={language.image} alt="" />
            <div> 
                <h2 className='text-xl font-semibold'>
                 {language.language}
                  </h2>
                <p>120+ teacher</p>
            </div>
            <div>
           
              <button className='bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600'>go</button>
              
            </div>
           </div>
           <div><FaAngleRight className='text-3xl' /></div>
          </div>
          </div>
          </Link>
       
        ))}
    </Zoom>
      </div>
    </div>
    );
};

export default Category;