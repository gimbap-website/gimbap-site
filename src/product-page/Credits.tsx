import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@material-ui/core/Link'; //need to fix





export default function Credits() {
  return (
  <div className="dark">
    <Typography variant="h2" component="h2" id="credits" color="textPrimary">the gimbap team</Typography>
    <Typography variant="body1" id="credits-body1" color="textPrimary">Miguel Hernandez</Typography>
    <Typography variant="body1" id="credits-body2" color="textPrimary">Angelynn Truong</Typography>
    <Typography variant="body1" id="credits-body3" color="textPrimary">Sebastien Fauque</Typography>
    <Typography variant="body1" id="credits-body4" color="textPrimary">Khandker Islam</Typography>
    <Typography variant="body1" id="credits-body5" color="textPrimary">Parker Hutcheson</Typography>
  </div> );
}
