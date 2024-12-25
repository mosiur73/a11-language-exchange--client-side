import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../../Provider/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const axiosInstance=axios.create({
    baseURL:'http://localhost:5000',
   withCredentials:true
})

const AxiosSecure = () => {
    const {signOutUser}=useContext(AuthContext)
    const navigate=useNavigate()
   useEffect(()=>{
    axiosInstance.interceptors.response.use(response =>{
        return response;
    }, error=>{
        console.log('error caught in intercepter')
        toast.error('error caught in intercepter')
        if(error.status === 401 || error.status ===403){
            console.log('need to logout the user')
            signOutUser()
            .then(() => {
                // redirect to the login page
                navigate('/login')
            })
            .catch(err => console.log(err))
        }
        return Promise.reject(error)
    })
   },[])

    return axiosInstance;
};

export default AxiosSecure;