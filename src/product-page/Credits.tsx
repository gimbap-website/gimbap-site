import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Parker from './team-members/Parker'
import Khandker from './team-members/Khandker'
import Miguel from './team-members/Miguel'
import Angelynn from './team-members/Angelynn'
import Sebastien from './team-members/Sebastien'




// https://mui.com/components/avatars/ <-- Reference documentation for adding images as avatars

export default function Credits() {
  return (
    <div className="dark">
    <Box sx={{ height: "600px", color: "#D4D0C3" }}>
      {/* Header */}
      <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '280px' }}>
        <Typography variant="h2" component="h2" id="credits-header" color="textPrimary">
          the gimbap team
        </Typography>
      </Grid>
      <Stack direction="row" spacing={7}   justifyContent="center">
        <Khandker />
        <Miguel />
        <Angelynn />
        <Sebastien />
        <Parker />
      </Stack>
    </Box>
  </div> );
}
