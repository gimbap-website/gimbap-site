import React from 'react';
import logo from './../../assets/gimbap-logo-green.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Splash() {

const executeScroll = () => document.getElementById('features').scrollIntoView({behavior:'smooth'})

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
<img id="main-logo" src={logo}  />

<div id="chevron" onClick={executeScroll}>
    <svg viewBox="0 0 68 33" className="chevron-down">
      <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
    </svg>
</div>

  </Grid>


    </div>
  )
}