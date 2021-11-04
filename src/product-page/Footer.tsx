import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MediumIcon from "./../../assets/medium-icon";
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';


// https://mui.com/components/avatars/ <-- Reference documentation for adding images as avatars

export default function Credits() {
  return (
  <div className="dark">


    <Stack direction="row" spacing={2}>

    <Link href="https://github.com/miguelh72">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/miguelh72/">
    <LinkedInIcon />
    </Link>
    <img id="medium-icon" src={MediumIcon} />


</Stack>

  </div> );
}