import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Medium from './../../assets/medium';


import GimbapIcon from './../../assets/gimbap-logo-notext.png';

const state = {
  img: "https://i.vimeocdn.com/portrait/58832_300x300"
}

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
    <Stack direction="row" alignItems="center" justifyContent="space-between" >
    <Box width={247.60} alignContent="center">
    <Link href="https://github.com/oslabs-beta/gimbap" target="_blank" rel="noopener">
    <GitHubIcon className="footerIcons" fontSize="large" />
    </Link>
    <Link href="https://www.linkedin.com/company/gimbap" target="_blank" rel="noopener">
    <LinkedInIcon className="footerIcons" fontSize="large"/>
    </Link>
    <Link href="https://medium.com/tag/humor" target="_blank" rel="noopener">
      <img id="medium-icon" src={Medium} />
    </Link>
    </Box>

    <Box>
    <img src={GimbapIcon} id="backToTop" onClick={scrollToTop}/>
    </Box>

    <Box>
      <Typography align="right">Accelerated by <Link id="os-link" href="https://opensourcelabs.io/" target="_blank" rel="noopener">OSLabs</Link></Typography>
      <Typography align="right">2021 Gimbap™ All Rights Reserved</Typography>
    </Box>
  </Stack>
  </div> );


}