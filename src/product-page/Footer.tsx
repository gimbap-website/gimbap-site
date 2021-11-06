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
import Medium from './../../assets/medium';
import Medium2 from './../../assets/medium-green';

import GimbapIcon from './../../assets/gimbap-logo-notext.png';



// https://mui.com/components/avatars/ <-- Reference documentation for adding images as avatars

export default function Credits() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
  <div className="dark section">

  {/* Need to change the url for below links */}
    <Stack direction="row" alignItems="center" justifyContent="space-between">
    <Box width={247.60} alignContent="center">
    <Link href="https://github.com/oslabs-beta/gimbap" target="_blank" rel="noopener">
    <GitHubIcon className="footerIcons" fontSize="large" />
    </Link>
    <Link href="https://www.linkedin.com/" target="_blank" rel="noopener">
    <LinkedInIcon className="footerIcons" fontSize="large"/>
    </Link>
    <Link href="https://medium.com/tag/humor" target="_blank" rel="noopener">
    <img id="medium-icon"
        src={Medium}
        onMouseOver={e => (e.currentTarget.src = {Medium})}
    />
    </Link>
    </Box>

    <Box>
    <img src={GimbapIcon} id="backToTop" onClick={scrollToTop}/>
    </Box>

    <Box>
      <Typography align="right">Accelerated by OSLabs</Typography>
      <Typography align="right">2021 Gimbap™ All Rights Reserved</Typography>
    </Box>
  </Stack>
  </div> );


}