import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../FireBace/FireBace.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

     const [user, setUser] = useState()


     const newUserCreateEmail = (email, password)=>{
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const loginUserWithEmail = (email, password)=>{
          return signInWithEmailAndPassword(auth, email, password)
     }

     const googleSingIn = (provider)=>{
          return signInWithPopup(auth, provider)
     }

     const githubSingIn = (provider) =>{
          return signInWithPopup(auth, provider)
     }

     const updateUserProfile = (profile) => {
          return updateProfile(auth.currentUser, profile)
     }

     const logOut = () => {
          return signOut(auth);
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser)
          });
          return () => {
               unsubscribe();
          }
     }, [])


     const AuthInfo = { user, updateUserProfile, githubSingIn, googleSingIn , newUserCreateEmail, loginUserWithEmail, logOut }

     return (
          <div>
               <AuthContext.Provider value={AuthInfo}>
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;