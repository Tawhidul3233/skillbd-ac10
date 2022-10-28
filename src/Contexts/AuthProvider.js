import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../FireBace/FireBace.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

     const [user, setUser] = useState()
     const [loading, setLoading] = useState(true)


     const newUserCreateEmail = (email, password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const loginUserWithEmail = (email, password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     const googleSingIn = (provider)=>{
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     const githubSingIn = (provider) =>{
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     const updateUserProfile = (profile) => {
          setLoading(true)
          return updateProfile(auth.currentUser, profile)
     }

     const logOut = () => {
          setLoading(true)
          return signOut(auth);
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser)
               setLoading(false)
          });
          return () => {
               unsubscribe();
          }
     }, [])


     const AuthInfo = { user, loading, setLoading, updateUserProfile, githubSingIn, googleSingIn , newUserCreateEmail, loginUserWithEmail, logOut }

     return (
          <div>
               <AuthContext.Provider value={AuthInfo}>
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;