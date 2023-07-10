<Paper
sx={{
   p: 2,
   margin: 'auto',
   maxWidth: 600,
   flexGrow: 1,
   backgroundColor: (theme) =>
      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}}
>
<Grid container spacing={2}>
   <Grid item>
      <ButtonBase sx={{ width: 128, height: 128 }}>
         <Img alt="complex" src={imageDr} />
      </ButtonBase>
   </Grid>
   <Grid item xs={12} sm container >
      <Grid item xs container direction="column" spacing={2}>
         <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
               Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
               Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="text.secondary">
               ID: 1030114
            </Typography>
         </Grid>
         <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
               Remove
            </Typography>
         </Grid>
      </Grid>
      <Grid item>
         <Typography variant="subtitle1" component="div">
            $19.00
         </Typography>
      </Grid>
   </Grid>
</Grid>
</Paper>
{/* ---------------------------------------- */}
<Paper
sx={{
   p: 2,
   margin: 'auto',
   maxWidth: 500,
   flexGrow: 1,
   backgroundColor: (theme) =>
      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}}
>
<Grid item sm sx={12} container spacing={2}>
   {/* FORMULARIO DE PERSONAL */}
   <Grid item sm container direction="column" sx spacing={3}>
      <Grid item sm direction="row" container spacing={2}>
         <Grid item>
            <Avatar alt="complex" src={imageDr} />
         </Grid>

         {/* Editar el label del selector de imagen  */}
         <Grid item>
            <FileUpload name="demo" url="./upload" mode="basic" label='Seleccionar Imagen' />
         </Grid>
      </Grid>

      {/* Imagen */}
      <Grid item >
         <Grid className="p-float-label">
            <InputText id="inputtext" />
            <label htmlFor="inputtext">Nombre</label>
         </Grid>
      </Grid>

      <Grid item>
         <Grid className="p-float-label">
            <InputText id="inputtext" />
            <label htmlFor="inputtext">Apellidos</label>
         </Grid>
      </Grid>

      {/* INPUT ESPECIALIDAD Y CEDULA */}
      <Grid item sx container direction="row" spacing={3}>
         <Grid item>
            <SelectList />
         </Grid>
         <Grid item>
            <Grid item className="p-float-label">
               <InputText id="inputtext" />
               <label htmlFor="inputtext">Cedula</label>
            </Grid>
         </Grid>
      </Grid>

      <Grid item>
         <Grid className="p-float-label">
            <InputTextarea id="textarea" rows={4} />
            <label htmlFor="textarea">Sobre mí...</label>
         </Grid>
      </Grid>


      {/* BOTON DE AGREGAR OTRA ESPECIALIDAD Y CEDULA*/}

      {/* TEXTO SOBRE MI */}

      {/* APARTADO CONSULTORIO */}
      {/* --CONSULTORIO TEXT / SELECT */}
      {/* HORARIOS */}

      {/* APARTADO CONTACTO */}
      {/* TELEFONO
         CORREO
         WHATSAPP */}

      {/* SECCION 2  REDES SOCIALES */}
      {/* LINKS */}
      {/* PAG WEB
         INSTAGRAM
         FACEBOOK
         PERSONALIZADO
            INPUT TXT NOMBRE / LINK */}

      {/* SECCION 3  SERVICIOS*/}
      {/* INP TXT ESPECIALISTA EN..
         AGREGAR OTRO */}
      {/* INP TXT ENFERMEDADES TRATADAS..
         AGREGAR OTRO */}

      {/* SECCION 4  ACADEMICOS */}


      {/* AQUI TERMINA FORMULARIO */}
   </Grid>
</Grid>





</Paper>