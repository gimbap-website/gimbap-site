import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';

export default function Sebastien() {
  return (
    <div id="sebastien">
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Avatar id="avatar" sx={{ bgcolor: "#28A78D" }}>SF</Avatar>
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Typography variant="body1" id="credits-body" color="textPrimary">Sebastien Fauque</Typography>
      </Grid>
      <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Link href="https://github.com/SebastienFauque">
          <GitHubIcon id="credits-icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/sebastienfauque/">
          <LinkedInIcon id="credits-icon" />
        </Link>
      </Grid>
    </div>
  )
}
