import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/HeaderLYR'
import  Footer  from '../components/Footer'


export const LayoutLYRPublic = () => {
   return (
      <div>
         {/* LAYOUT */}
            <Header/>
         {/* Contenido Principal */}
         <section className='contenido'>
            <Outlet />
         </section> 
            <Footer/>
      </div>
   )
}

