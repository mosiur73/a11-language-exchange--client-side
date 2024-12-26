import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const StateSection = () => {
  const [users,setUsers]=useState([])
  const [allData,setAllData]=useState([])
  const [review,setReview]=useState([])
 
  
 
  
  useEffect(() => {
    const fetchAllLanguage = async () => {
      try {
        const { data } = await axios.get(
          `https://assignment11-language-exchange-server.vercel.app/language`
        );
        
        setAllData(data);
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
    
    useEffect(()=>{
      const fetchAllReview = async () => {
          const { data } = await axios.get(`http://localhost:5000/reviews`)
          setReview(data)
        }
        fetchAllReview()
  },[])
  
   
    return (
        <div className="flex flex-wrap justify-center gap-12 p-8 rounded-lg shadow-md">
      
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">{allData.length}</p>
            <p className="text-sm text-gray-600">tutor count</p>
          </div>
         
       
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">{review.length}</p>
            <p className="text-sm text-gray-600">review count</p>
          </div>
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">{users.length}</p>
            <p className="text-sm text-gray-600">total user</p>
          </div>
          <div  className="text-center bg-gray-200 p-10 ">
            <p className="text-2xl font-bold text-gray-800">9</p>
            <p className="text-sm text-gray-600">total language</p>
          </div>
          <div>
          
          </div>
       
      </div>
    );
};

export default StateSection;