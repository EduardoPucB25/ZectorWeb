

export const StaffService = {
   getStaffData() {
      return [
         {
            id: '1000',
            especialidad: 'Internista',
            code: 'CHKGC3H6GC',
            nombre: 'Manuel ',
            apellido: 'Hernesto',
            description: 'Doctor Description',
            image: '1',
            valoracion: 4
         },
         {
            id: '1001',
            especialidad: 'Anestesiologo',
            code: 'CHKGC3H6GC',
            nombre: 'Bamboo ',
            apellido: 'Watch',
            description: 'Doctor Description',
            image: '1',
            valoracion: 3
         },
         {
            id: '1002',
            especialidad: 'Anestesiologo',
            code: 'CHKGC3H6GC',
            nombre: 'Bamboo ',
            apellido: 'Watch',
            description: 'Doctor Description',
            image: '1',
            valoracion: 1
         },        
         {
            id: '1003',
            especialidad: 'Anestesiologo',
            code: 'CHKGC3H6GC',
            nombre: 'Bamboo ',
            apellido: 'Watch',
            description: 'Doctor Description',
            image: '1',
            valoracion: 5
         },
      ];
   },



   getStaffMini() {
       return Promise.resolve(this.getStaffData().slice(0, 5));
   },

   getStaffSmall() {
       return Promise.resolve(this.getStaffData().slice(0, 10));
   },

   getStaff() {
       return Promise.resolve(this.getStaffData());
   },

};

