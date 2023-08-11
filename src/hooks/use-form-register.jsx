import React from 'react'
import { useState } from 'react'

export const useFormRegister = (InitialObj = {}) => {

      const [form, setForm] = useState(InitialObj);

         const changed =({target}) =>{
            // console.log(target);
            const {name, value} = target;
            setForm({
               ...form,
               [name]:value
            });
            console.log(form);
         }   

   return {
      form,
      changed
      

   };
  
}
