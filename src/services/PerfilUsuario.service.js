import { Global } from "../helpers/global";

const ReqPerfil = async (id) => {
   const request = await fetch(Global.url + `/personal/${id}`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "Autorization": localStorage.getItem("token")
     }
   });
   const PerfilData = await request.json();
   console.log(PerfilData);
   const data = PerfilData.especialidades;
   return data
   // console.log(personal)
   // if (PerfilData.personal && PerfilData.status == "success") {
   // }      
   // console.log(PerfilData);
 }

export const PerfilService = {
      ReqPerfil() {
         return ReqPerfil()
      },
     getPerfil() {
         return Promise.resolve(this.ReqPerfil());
     },
  };
