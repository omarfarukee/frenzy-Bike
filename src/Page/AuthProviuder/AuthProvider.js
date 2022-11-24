import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    // console.log(user)
     const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signUp = (email, password) =>{
        setLoader(true)
      return   createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoader(true)
     return   signInWithEmailAndPassword(auth ,email, password)
    }
    const updateUser =(userInfo)=>{
        return   updateProfile(auth.currentUser, userInfo)
       } 
    const logOut = () => {
        setLoader(true)
       return  signOut(auth)
      }
    const authInfo = {
        user, loader, googleProvider,signInWithGoogle, signUp,logOut,updateUser, login
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                //    console.log(currentUser)
                   setUser(currentUser)
                   setLoader(false)
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