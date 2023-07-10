import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


export const LayoutLYRPublic = () => {
   return (
      <div>
         {/* LAYOUT */}
            <Header/>
         {/* Contenido Principal */}
         <section className='contenido'>
            <Outlet />
         </section> 
            
      </div>
   )
}

