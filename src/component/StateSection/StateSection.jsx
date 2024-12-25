import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StateSection = () => {
  const [language,setLanguage]=useState([])
    
    useEffect(()=>{
        const fetchAllLanguage = async () => {
            const { data } = await axios.get(`https://assignment11-language-exchange-server.vercel.app/language`)
            setLanguage(data)
          }
        fetchAllLanguage()
    },[])
    console.log(language)
     
    const totalReviews = language.reduce((total, lang) => total + (lang.reviews?.length || 0), 0);
     console.log(totalReviews)
    return (
        <div className="flex flex-wrap justify-center gap-12 p-8 rounded-lg shadow-md">
      
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">{language.length}</p>
            <p className="text-sm text-gray-600">tutor count</p>
          </div>
         
       
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">{totalReviews}</p>
            <p className="text-sm text-gray-600">review count</p>
          </div>
       
      </div>
    );
};

export default StateSection;