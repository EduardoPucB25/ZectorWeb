import React, { useState, useEffect, useRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Global } from '../../../helpers/global'
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router-dom';

const ItemCategoria = ({categorias}) => {
   // console.log(categorias);
   const datacategorias = categorias;
   
  return (
   <div>
      {/* {datacategorias.map((cat) =>{
         console.log(cat.nombre)
      })} */}
      {datacategorias.map((cat) =>(
         <MenuItem>
         <ListItemText >
            {cat.nombre}
         </ListItemText>
         <Divider/>
      </MenuItem>         
      ))}
         {/* <MenuItem>
            <ListItemText >
               Hola
            </ListItemText>
            <Divider/>
         </MenuItem>  */}
   </div>

  )
}

export default ItemCategoria
