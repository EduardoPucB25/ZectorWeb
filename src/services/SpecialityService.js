

export const SpecialityService = {
   getSpeciality() {
      return [
         {
            id: '1000',
            code: 'CHK564DFGC56',
            nombre: 'Medicina Interna ',

         },
         {
            id: '1000',
            code: 'CHK564DFGC56',
            nombre: 'Psicologia ',

         },
         {
            id: '1000',
            code: 'CHK564DFGC56',
            nombre: 'Pediatria ',

         },
         {
            id: '1000',
            code: 'CHK564DFGC56',
            nombre: '',

         },
         {
            id: '1000',
            code: 'CHK564DFGC56',
            nombre: '',

         },
      ];
   },



   getSpecialityMini() {
       return Promise.resolve(this.getSpecialityData().slice(0, 5));
   },

   getSpecialitySmall() {
       return Promise.resolve(this.getSpecialityData().slice(0, 10));
   },

   getSpeciality() {
       return Promise.resolve(this.getSpecialityData());
   },

};

