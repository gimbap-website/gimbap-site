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
    <Typography variant="h2" id="getting-started">let's get started</Typography>
    <Link href="http://www.github.com">
    <GitHubIcon />
    </Link>
    <Link href="http://www.apple.com">
    <AppleIcon />
    </Link>
    <Link href="http://www.microsoft.com">
      {/* Window Icon is not an original window; replacement needed */}
    <WindowIcon />
    </Link>
  </div> );
}
