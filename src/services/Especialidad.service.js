import { Global } from "../helpers/global";

const ReqEspecialidad = async () => {
   const request = await fetch(Global.url + '/especialidades/traer', {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "Autorization": localStorage.getItem("token")
     }
   });
   const EspecialidadData = await request.json();
   
   const data = EspecialidadData.especialidades;
   return data
   // console.log(personal)
   // if (EspecialidadData.personal && EspecialidadData.status == "success") {
   // }      
   // console.log(EspecialidadData);
 }

export const EspecialidadService = {
      ReqEspecialidad() {
         return ReqEspecialidad()
      },
      getEspecialidadMini() {
         return Promise.resolve(this.ReqEspecialidad().then((data) => {
           return data.slice(0, 5)
         }));
     },
  
     getEspecialidadSmall() {
         return Promise.resolve(this.ReqEspecialidad().then((data) => {
            return data.slice(0, 10)
          }));
     },
  
     getEspecialidadl() {
         return Promise.resolve(this.ReqEspecialidad());
     },
  };
