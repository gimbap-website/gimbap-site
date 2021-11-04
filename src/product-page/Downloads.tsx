import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import WindowIcon from '@mui/icons-material/Window';
import Link from '@material-ui/core/Link'; //need to fix


export default function Downloads() {
  return (
  <div className="light">
    <Typography variant="h2" id="getting-started">Getting Started</Typography>
    <Link href="http://www.github.com">
    <GitHubIcon />
    </Link>
    <AppleIcon />
    <WindowIcon />
  </div> );
}
