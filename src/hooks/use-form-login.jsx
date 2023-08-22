import React, { useState } from 'react'

export const useFormLogin = (InitialObj = {}) => {
      const [form, setForm] = useState(InitialObj);
         
         const changed =({target}) =>{
            console.log(target);
            const {name, value} = target;
            setForm({
               ...form,
               [name]:value
            });
            
         }   

   return {
      changed,
      form

   };
  
}
