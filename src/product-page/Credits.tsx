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
    <Typography variant="h2" component="h2" id="credits" color="textPrimary">the gimbap team</Typography>
    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>MH</Avatar>
    <Typography variant="body1" id="credits-body1" color="textPrimary">Miguel Hernandez</Typography>
    <Link href="https://github.com/miguelh72">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/miguelh72/">
    <LinkedInIcon />
    </Link>

    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>AT</Avatar>
    <Typography variant="body1" id="credits-body2" color="textPrimary">Angelynn Truong</Typography>
    <Link href="https://github.com/vngelynn">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/vngelynn/">
    <LinkedInIcon />
    </Link>

    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>SF</Avatar>
    <Typography variant="body1" id="credits-body3" color="textPrimary">Sebastien Fauque</Typography>
    <Link href="https://github.com/SebastienFauque">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/sebastienfauque/">
    <LinkedInIcon />
    </Link>

    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>KI</Avatar>
    <Typography variant="body1" id="credits-body4" color="textPrimary">Khandker Islam</Typography>
    <Link href="https://github.com/khandkerislam">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/khandkerislam/">
    <LinkedInIcon />
    </Link>

    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>PH</Avatar>
    <Typography variant="body1" id="credits-body5" color="textPrimary">Parker Hutcheson</Typography>
    <Link href="https://github.com/Parker9706">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/parkerhutcheson/">
    <LinkedInIcon />
    </Link>
  </div> );
}
