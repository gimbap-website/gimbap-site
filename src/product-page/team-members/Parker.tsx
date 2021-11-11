import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';

import Park from "./../../../assets/parker";




export default function Parker() {
  return (
    <div id="parker">
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Avatar id="avatar" src={Park} />
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Typography variant="body1" id="credits-body" color="textPrimary">Parker Hutcheson</Typography>
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Link href="https://github.com/Parker9706" target="_blank">
          <GitHubIcon id="credits-icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/parkerhutcheson/" target="_blank">
          <LinkedInIcon id="credits-icon" />
        </Link>
      </Grid>
    </div>
  )
}
