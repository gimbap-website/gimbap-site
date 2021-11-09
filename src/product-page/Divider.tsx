import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiDivider from '@mui/material/Divider';


export default function Divider() {
  return (
  <div className="dark section divider">
  <Stack
      id="divider-box"
      divider={<MuiDivider orientation="vertical" flexItem />}
      spacing ={{xs:3, lg:12}}
      alignItems="center"
      direction={{xs: 'column', lg: 'row' }}
    >
      {/* All typography goes into the box/divider */}
   <Typography variant="h2" className="why-header" id="why">Why Gimbap?</Typography>
   <div className="divider-info">
    <Typography variant="body1" className="why-feature" id="why-feature-1-1/2">A completely Open Source application that gives developers a platform to test and measure their application’s endpoint performance to gauge the viability of transitioning to a microservice architecture.</Typography>
  </div>
</Stack>
  </div> );
}
