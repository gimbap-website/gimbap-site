import React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MemberCard from './team-members/MemberCard'




// https://mui.com/components/avatars/ <-- Reference documentation for adding images as avatars

export default function Credits() {
  return (
    <div className="dark">
    <Box sx={{color: "#D4D0C3" }}>
      {/* Header */}
      <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={{xs:10, lg:10}}
      >
        <Grid item>
          <Typography variant="h2" component="h2" id="credits-header" color="textPrimary">
            the gimbap team
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="center" spacing={12} alignItems="center">
          <Stack direction="row" spacing={{xs:5, lg:12}}>
            <MemberCard data={1} />
            <MemberCard data={3} />
          </Stack>
          <Stack direction="row" spacing={{xs:5, lg:12}}>
            <MemberCard data={0}/>
            <MemberCard data={2} />
          </Stack>
          <Stack direction="row" spacing={{xs:5, lg:12}}>
            <MemberCard data={4} />
          </Stack>
        </Stack>
        </Grid>
      </Grid>
    </Box>
  </div> );
}
