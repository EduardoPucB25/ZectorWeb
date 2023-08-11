

export const StaffService = {
   getStaffData() {
      return [
         {
            id: '1000',
            especialidad: 'Medicina Interna',
            code: 'CHK564DFGC56',
            nombre: 'Alberto ',
            apellido: 'Perez',
            description: 'Doctor Description',
            correo: '',
            image: '',
            valoracion: 4
         },
         {
            id: '1001',
            especialidad: 'Psicologo',
            code: 'C54A6F46GSC4',
            nombre: 'Alejandra ',
            apellido: 'Caceres',
            description: 'Doctor Description',
            correo: '',
            image: '',
            valoracion: 3
         },
         {
            id: '1002',
            especialidad: 'Pediatra',
            code: 'CHA51SV61DFC',
            nombre: 'Hernesto ',
            apellido: 'Medrano',
            description: 'Doctor Description',
            correo: '',
            image: '',
            valoracion: 1
         },        
         {
            id: '1003',
            especialidad: 'Medicina interna',
            code: 'CH687754D65B',
            nombre: 'Sandra ',
            apellido: 'Olivos',
            description: 'Doctor Description',
            correo: '',
            image: '',
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

