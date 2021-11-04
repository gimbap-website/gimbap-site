import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';


// https://mui.com/components/avatars/ <-- Reference documentation for adding images as avatars

export default function Credits() {
  return (
  <div className="dark">
    <Link href="https://github.com/oslabs-beta/gimbap">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com">
    <LinkedInIcon />
    </Link>
  </div> );
}
