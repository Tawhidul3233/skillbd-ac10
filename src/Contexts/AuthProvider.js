import React, { createContext } from 'react';
import {getAuth} from "firebase/auth"
import app from '../FireBace/FireBace.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {



     const AuthInfo = { }

     return (
          <div>
               <AuthContext.Provider value={AuthInfo}>
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;