import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    // console.log(user)
     const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signUp = (email, password) =>{
        setLoading(true)
      return   createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoading(true)
     return   signInWithEmailAndPassword(auth ,email, password)
    }
    const updateUser =(userInfo)=>{
        return   updateProfile(auth.currentUser, userInfo)
       } 
    const logOut = () => {
        setLoading(true)
       return  signOut(auth)
      }
    const authInfo = {
        user, loading, googleProvider,signInWithGoogle, signUp,logOut,updateUser, login
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                //    console.log(currentUser)
                   setUser(currentUser)
                   setLoading(false)
               })
               return () =>unSubscribe()
       },[])
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;