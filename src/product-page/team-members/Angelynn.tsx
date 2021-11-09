import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';

import AngelynnT from "./../../../assets/angelynn";

export default function Angelynn() {
  return (
    <div id="angelynn">
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Avatar id="avatar" src={AngelynnT} />
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Typography variant="body1" id="credits-body" color="textPrimary">Angelynn Truong</Typography>
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Link href="https://github.com/vngelynn">
          <GitHubIcon id="credits-icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/vngelynn/">
          <LinkedInIcon id="credits-icon" />
        </Link>
      </Grid>
    </div>
  )
}
