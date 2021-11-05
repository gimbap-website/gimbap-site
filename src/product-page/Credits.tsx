import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@material-ui/core/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



// https://mui.com/components/avatars/ <-- Reference documentation for adding images as avatars

export default function Credits() {
  return (
    <div className="dark">
    <Box sx={{ height: "700px", color: "#D4D0C3" }}>
      {/* Header */}
    <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '300px' }}
    >
    <Typography variant="h2" component="h2" id="credits-header" color="textPrimary">
      the gimbap team
    </Typography>
    </Grid>

    {/* Start of avatars */}

    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '300px' }}
    >
    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>MH</Avatar>
    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Typography variant="body1" id="credits-body" color="textPrimary">
      Miguel Hernandez
    </Typography>
    </Grid>
    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Link href="https://github.com/miguelh72">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/miguelh72/">
    <LinkedInIcon id="credits-icon" />
    </Link>
    </Grid>

    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>AT</Avatar>
    </Grid>
    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Typography variant="body1" id="credits-body" color="textPrimary">
      Angelynn Truong
    </Typography>
    <Link href="https://github.com/vngelynn">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/vngelynn/">
    <LinkedInIcon />
    </Link>
    </Grid>

    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>SF</Avatar>
    </Grid>
    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Typography variant="body1" id="credits-body" color="textPrimary">Sebastien Fauque</Typography>
    <Link href="https://github.com/SebastienFauque">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/sebastienfauque/">
    <LinkedInIcon />
    </Link>
    </Grid>

    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>KI</Avatar>
    </Grid>
    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Typography variant="body1" id="credits-body" color="textPrimary">Khandker Islam</Typography>
    <Link href="https://github.com/khandkerislam">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/khandkerislam/">
    <LinkedInIcon />
    </Link>
    </Grid>

    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Avatar sx={{ bgcolor: "#28A78D", width: 100, height: 100 }}>PH</Avatar>
    </Grid>
    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Typography variant="body1" id="credits-body" color="textPrimary">Parker Hutcheson</Typography>
    <Link href="https://github.com/Parker9706">
    <GitHubIcon />
    </Link>
    <Link href="https://www.linkedin.com/in/parkerhutcheson/">
    <LinkedInIcon />
    </Link>
    </Grid>
    </Grid>
    </Box>
  </div> );
}
