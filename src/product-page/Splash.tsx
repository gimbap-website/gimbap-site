import React from 'react';
import logo from './../../assets/gimbap-logo-green.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Splash() {
  return (
    <div className="dark">
  <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
<img id="main-logo" src={logo} />
  {/* <Grid item xs={3}> */}
  </Grid>

    </div>
  )
}