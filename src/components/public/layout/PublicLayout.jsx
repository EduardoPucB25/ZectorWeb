import React from 'react'
import { Outlet } from 'react-router-dom'

import  Header  from '../components/Header'
import  Footer  from '../components/Footer'


export const PublicLayout = () => {

   

   
   return (
      <>
         {/* LAYOUT */}
            <Header/>
         {/* Contenido Principal */}
         <section className='contenido'>
            <Outlet />
         </section>
            <Footer/>
      </>
   )
}
