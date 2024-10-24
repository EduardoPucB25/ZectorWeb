import { Global } from "../helpers/global";

const ReqPersonal = async () => {
   const request = await fetch(Global.url + '/personal/traer', {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "Autorization": localStorage.getItem("token")
     }
   });
   const PersonalData = await request.json();
   
   const data = PersonalData.personal;
   return data
   // console.log(personal)
   // if (PersonalData.personal && PersonalData.status == "success") {
       
   // }      
  
   // console.log(PersonalData);

   
 }

export const PersonalService = {
      ReqPersonal() {
         return ReqPersonal()
      },
      getPersonalMini() {
         return Promise.resolve(this.ReqPersonal().then((data) => {
           return data.slice(0, 5)
         }));
     },
  
     getPersonalSmall() {
         return Promise.resolve(this.ReqPersonal().then((data) => {
            return data.slice(0, 10)
          }));
     },
  
     getPersonal() {
         return Promise.resolve(this.ReqPersonal());
     },
  };
