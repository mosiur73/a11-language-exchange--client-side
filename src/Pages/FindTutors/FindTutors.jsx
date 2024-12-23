import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FindTutorCard from './FindTutorCard';

const FindTutors = () => {
    const [language,setLanguage]=useState([])

    useEffect(()=>{
        fetchAllLanguage()
    },[])
    const fetchAllLanguage = async () => {
        const { data } = await axios.get('http://localhost:5000/language')
        setLanguage(data)
      }
      
    return (
        <div className='my-10'>
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                language.map(lang => <FindTutorCard key={lang._id} lang={lang}></FindTutorCard>)
            }
           </div>
        </div>
    );
};

export default FindTutors;