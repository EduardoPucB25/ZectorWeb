import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderLYR from '../components/HeaderLYR.JSX';



export const LayoutLYRAdmin = () => {
   return (
      <div>
         {/* LAYOUT */}
            <HeaderLYR/>
         {/* Contenido Principal */}
         <section className='contenido'>
            <Outlet />
         </section> 
      </div>
   )
}