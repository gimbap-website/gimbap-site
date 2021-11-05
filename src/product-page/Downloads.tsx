import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import WindowIcon from '@mui/icons-material/Window';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';



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
    </Grid>

    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '300px' }}
    >
        <Grid item xs={0}>

    <Link href="http://www.github.com">
    <GitHubIcon sx={{color: "red"}} />
    </Link>
    <Link href="http://www.apple.com">
    <AppleIcon />
    </Link>
    <Link href="http://www.microsoft.com">
      {/* Window Icon is not an original window; replacement needed */}
    <WindowIcon />
    </Link>
    </Grid>
    </Grid>
    </Box>
  </div> );
}
