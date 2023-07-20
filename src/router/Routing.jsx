import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeAdmin from '../components/public/screens/homeAdmin';
import {Register} from '../components/public/screens/register';
import {Login} from '../components/public/screens/login';
// import HomeAdminZector from '../components/admin/screens/homeAdminZector';

// import { AdminLayout } from '../components/admin/layout/AdminLayout';
import { PublicLayout } from '../components/public/layout/PublicLayout';
// import { LayoutLYRAdmin } from '../components/admin/layout/LayoutLYRAdmin';
// import LoginZector from '../components/admin/layout/LoginZector';
// import RegisterZector from '../components/admin/layout/RegisterZector';
import { MiPerfil } from '../components/public/screens/miPerfil';
import { Areas } from '../components/public/screens/areas/areas';
import HomeAdminMUI from '../components/public/screens/homeAMUI';



export const Routing = () => {

   return (
      <BrowserRouter>
         <Routes>
            {/* RUTAS DE ZECTOR ADMIN */}
            {/* <Route path='/zector/' element={<AdminLayout />}>
               <Route index element={<HomeAdminZector />} />
               <Route path='homeAdmin' element={<HomeAdminZector />} />

            </Route>
            <Route path='/zector/register' element={<LayoutLYRAdmin />}>
               <Route index element={<RegisterZector/>} />
            </Route>
            <Route path='/zector/login' element={<LayoutLYRAdmin />}>
               <Route index element={<LoginZector />} />
            </Route> */}
            {/* ----------------------------------------------------------------- */}
            {/* RUTAS DE ZECTOR/HOSPITAL(ES) PUBLICO */}

            <Route path='/zector/cma/' element={<PublicLayout />}>
               <Route index element={<Login/>} />
               <Route path='homeAdmin' element={<HomeAdmin />} />
               <Route path='login' element={<Login />} />
               <Route path='register' element={<Register />} />
               <Route path='miperfil' element={<MiPerfil />} />
               <Route path='areas' element={<Areas />} />

            </Route>
            <Route path='/zector/cma/homeAdminMUI' element={<HomeAdminMUI />}/>
{/* 
            {hospitales.map((hospital) => {  
               <Route path={UrlPublic + hospital.alias} element={<PublicLayout />}>
                  <Route index element={<HomeAdmin />} />
                  <Route path={hospital.alias} element={<HomeAdmin />} />
               </Route>
            })}

            {hospitales.map((hospital) => {
               <Route path={ UrlPublic + hospital.alias + '/register'} element={<PublicLayout />}>
                  <Route index element={<Register />} />
               </Route>
            })}
            {hospitales.map((hospital) => {
               <Route path={UrlPublic + hospital.alias + '/login'} element={<PublicLayout />}>
                  <Route index element={<Login />} />
               </Route>
            })}
 */}




            {/* RUTAS DE ZECTOR/HOSPITAL(ES) ADMIN */}



         </Routes>
      </BrowserRouter>

   )
}
