import React from 'react';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import Link from '@material-ui/core/Link';
import AngelynnT from '../../../assets/angelynn.jpg';
import KhanI from '../../../assets/khan.jpg';
import SebastienF from '../../../assets/sebastien.jpg';
import MiguelH from '../../../assets/miguel.jpg';
import ParkerH from '../../../assets/parker.png';

export default function MemberCard(props) {

//import { github } from 'react-code-blocks';

  const members = [
    {
        image: AngelynnT,
        linkedIn: 'https://www.linkedin.com/in/vngelynn/',
        github: 'https://github.com/vngelynn',
        name: 'Angelynn Truong'
    },
    {
        image: KhanI,
        linkedIn: 'https://www.linkedin.com/in/khandkerislam/',
        github: 'https://github.com/khandkerislam',
        name: 'Khandker Islam'
    },
    {
        image: SebastienF,
        linkedIn: 'https://www.linkedin.com/in/sebastienfauque/',
        github: 'https://github.com/SebastienFauque',
        name: 'Sebastien Fauque'
    },
    {
        image: MiguelH,
        linkedIn: 'https://www.linkedin.com/in/miguelh72/',
        github: 'https://github.com/miguelh72',
        name: 'Miguel Hernandez'
    },
    {
        image: ParkerH,
        linkedIn: 'https://www.linkedin.com/in/parkerhutcheson/',
        github: 'https://github.com/Parker9706',
        name: 'Parker Hutcheson'
    },

] ;

  const {data} = props;
  const element = members[data];

  return (
    <div className="memberCard">
      <Grid
      style={{"textAlign": "center"}}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      >
        <Grid>
          <Avatar id="avatar" src={element.image} />
        </Grid>
        <Grid item>
          <Typography variant="body1" id="credits-body" color="textPrimary">{element.name}</Typography>
        </Grid>
        <Grid item>
          <Link href={element.github}>
            <GitHubIcon id="credits-icon" />
          </Link>
          <Link href={element.linkedIn}>
            <LinkedInIcon id="credits-icon" />
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
