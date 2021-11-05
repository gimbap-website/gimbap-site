import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MediumIcon from './../../assets/medium-icon';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



// https://mui.com/components/avatars/ <-- Reference documentation for adding images as avatars

export default function Credits() {
  return (
  <div className="dark">
    <Box sx={{ height: "700px", color: "#D4D0C3" }}>
    <Stack direction="row" spacing={2}>

    <Link href="https://github.com/miguelh72">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/miguelh72/">
    <LinkedInIcon />
    </Link>
    {/* NEED TO ADJUST SIZE OF THIS ICON */}
    <img id="medium-icon" width="24" height="24" src={MediumIcon} />


</Stack>
</Box>

  </div> );
}