import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light');


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const singInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
             console.log('user login',currentUser)
             if(currentUser?.email){
                const user={email:currentUser.email}

                axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                .then(res =>{
                    console.log('login token',res.data)
                    setLoading(false);
                })
             }
             else{
                axios.post('http://localhost:5000/logout',{},{
                    withCredentials:true
                })
                .then(res =>{
                    console.log('logout token',res.data)
                    setLoading(false);
                })
             }
           
        })

        return () => {
            unsubscribe();
        }
    }, [])

    // Toggle between dark and light themes
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); 
    };


    const authInfo={
        user,
        setUser,
        loading,
        createUser,
        singInUser,
        singInWithGoogle,
        signOutUser,
        updateUserProfile,
        toggleTheme,
        theme

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;