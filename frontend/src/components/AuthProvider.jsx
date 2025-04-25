import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

 const intialUser = localStorage.getItem("Users");
 const [authUser, setauthUser] = useState(
    intialUser? JSON.parse(intialUser) : undefined
 )

 return(
    <AuthContext.Provider value={[authUser, setauthUser]}>
          {children}
    </AuthContext.Provider>
 )

}

export const useAuth=()=>useContext(AuthContext);