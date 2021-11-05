import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import WindowIcon from '@mui/icons-material/Window';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import WindowsLogo from './../../assets/windows-logo.png';

// Defines our Icon sizes for this page

export default function Downloads() {
  return (
  <div className="light">
    <Box sx={{ height: "700px", color: "#D4D0C3" }}>
    <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '300px' }}
    >
      <Typography variant="h2" id="getting-started" color="#6C6C6C" >let's get started</Typography>
      <Typography variant="h3" id="select-platform" color="#6C6C6C" >select your platform</Typography>
    </Grid>

    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100px' }}
    >

    <Link href="https://github.com/oslabs-beta/gimbap" target="_blank" rel="noopener">
      <GitHubIcon style={{ fill: "#28A78D" }} sx={{ fontSize: 60 }}/>
    </Link>
    <Link href="http://www.apple.com" target="_blank" rel="noopener">
      <AppleIcon style={{ fill: "#28A78D" }} sx={{ fontSize: 60 }}/>
    </Link>
    <Link href="http://www.microsoft.com" target="_blank" rel="noopener">
      <img src={WindowsLogo} width="60" height="60" />
    </Link>
    </Grid>
    </Box>
  </div> );
}
