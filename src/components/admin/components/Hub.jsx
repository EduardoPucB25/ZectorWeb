import React from 'react'
import Typography from '@mui/material/Typography';
import { Button }  from '@mui/material';

export const Hub = () => {
  return (
    <div>
      <Button variant="contained" sx={{backgroundColor: '#0e4686', color: 'white',  }}>
        <Typography variant="contained" >
          Hub
        </Typography>
      </Button>
    </div>
  )
}
