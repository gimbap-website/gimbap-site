import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';

import MiguelH from "./../../../assets/pokemon/mewtoo";


export default function Miguel() {
  return (
    <div id="miguel">
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Avatar id="avatar" src={MiguelH} />
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Typography variant="body1" id="credits-body" color="textPrimary">Miguel Hernandez</Typography>
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Link href="https://github.com/miguelh72">
          <GitHubIcon id="credits-icon"/>
        </Link>
        <Link href="https://www.linkedin.com/in/miguelh72/">
          <LinkedInIcon id="credits-icon" />
        </Link>
      </Grid>
    </div>
  )
}
