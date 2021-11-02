import React from 'react';
import logo from './../../assets/gimbap-logo-green.png';
import Box from '@mui/material/Box';



export default function Splash() {
  return (
    <div>
<Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    <img style={{width: '100vh'}}src={logo} />
    </div>
  )
}