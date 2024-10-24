import React, { useState, useEffect,createContext } from 'react';
import { Global } from '../helpers/global'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [ auth, setAuth] = useState({});
   const [compartido, setCompartido] = useState("Compartido en todos los componentes")
  
   useEffect(() =>{
      authUser();
   },[]);

   const authUser = async() => {

      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      console.log(user);
      if(!token || !user){
         return false;
      }
      
      const userObj = JSON.parse(user);
      const userId = userObj.id;
      const request = await fetch(Global.url + '/usuario/' + userId, {
         method: "GET",
         headers:{
            "Content-Type": "application/json",
            "Autorization": token            
         }
      });
      const data = await request.json();
      setAuth(data.usuario)

   }


   return (
      <AuthContext.Provider
         value={{
            auth,
            setAuth
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContext;