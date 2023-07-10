import React, { useState } from 'react'

export const useFormLogin = (InitialObj = {}) => {
      const [form, setForm] = useState(InitialObj);

         const changed =({target}) =>{
            console.log(target);

         }   

   return {
      changed,
      form

   };
  
}
