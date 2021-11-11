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
import LinuxLogo from './../../assets/linux-logo.png';
import Divider from '@mui/material/Divider';



export default function Downloads() {
  return (
  <div className="light">



    <Box display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    >

    <Grid justifyContent="center">

    <Stack direction="column" spacing={4}>
      <Typography variant="h1" id="getting-started" color="#6C6C6C" >get started with gimbap</Typography>
      <Typography variant="body1" id="select-platform" color="#6C6C6C" >fork our github repository</Typography>
      <Divider></Divider>
      <br></br>
      <br></br>
    </Stack>
    <Stack spacing={3} direction="row" justifyContent="center">
      <Link href="https://github.com/oslabs-beta/gimbap" target="_blank" rel="noopener">
        <GitHubIcon id="download-icon" />
      </Link>
      {/* Will add these icons when Electron is fully supported */}
      {/* <Link href="http://www.apple.com" target="_blank" rel="noopener">
        <AppleIcon id="download-icon" />
      </Link> */}
      {/* <Link href="http://www.microsoft.com" target="_blank" rel="noopener">
        <img id="custom-download-icon" src={WindowsLogo} width="60" height="60" />
      </Link> */}
      {/* <Link href="http://www.linux.org" target="_blank" rel="noopener">
        <img id="custom-download-icon" src={LinuxLogo} width="60" height="60" />
      </Link> */}
    </Stack>
    </Grid>
    </Box>
  </div> );
};
