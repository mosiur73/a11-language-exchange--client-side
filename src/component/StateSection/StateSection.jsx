import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StateSection = () => {
  const [users,setUsers]=useState([])
  const [totalReviews, setTotalReviews] = useState(0);
  const [uniqueLanguages, setUniqueLanguages] = useState(0);
  const [language,setLanguage]=useState([])
    
  //   useEffect(()=>{
  //       const fetchAllLanguage = async () => {
  //           const { data } = await axios.get(`https://assignment11-language-exchange-server.vercel.app/language`)
  //           setLanguage(data)
  //         }
  //       fetchAllLanguage()
  //   },[])
  useEffect(() => {
    const fetchAllLanguage = async () => {
      try {
        const { data } = await axios.get(
          `https://assignment11-language-exchange-server.vercel.app/language`
        );
        setLanguage(data);
        console.log(data)

        // Calculate total reviews
        const total = data.reduce((acc, lang) => acc + (lang.reviews || 0), 0);
        console.log(total)
        setTotalReviews(total);

        // Calculate unique languages
        const uniqueLangCount = new Set(data.map((lang) => lang.name)).size;
        setUniqueLanguages(uniqueLangCount);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };
    fetchAllLanguage();
  }, []);
    useEffect(()=>{
        const fetchAllUser = async () => {
            const { data } = await axios.get(`https://assignment11-language-exchange-server.vercel.app/users`)
            setUsers(data)
          }
          fetchAllUser()
    },[])
    // console.log(language)
     
   
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
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">{users.length}</p>
            <p className="text-sm text-gray-600">total user</p>
          </div>
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">{uniqueLanguages}</p>
            <p className="text-sm text-gray-600">total language</p>
          </div>
       
      </div>
    );
};

export default StateSection;