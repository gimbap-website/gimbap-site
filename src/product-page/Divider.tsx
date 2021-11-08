import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiDivider from '@mui/material/Divider';


export default function Divider() {
  return (
  <div className="dark section">
  <Stack
      id="divider-box"
      divider={<MuiDivider orientation="vertical" flexItem />}
      spacing ={{xs:3, lg:12}}
      alignItems="center"
      direction={{xs: 'column', lg: 'row' }}
    >
      {/* All typography goes into the box/divider */}
   <Typography variant="h2" className="why-header" id="why">Why Microservices?</Typography>
   <div>
    <Typography variant="body1" className="why-feature" id="why-feature-1-1/2">Up to</Typography>
    <Typography variant="body1" className="why-feature-bold" id="why-feature-bold-1">4x</Typography>
    <Typography variant="body1" className="why-feature" id="why-feature-2/2">increased speeds</Typography>
  </div>

   <div>
   <Typography variant="body1" className="why-feature" id="why-feature-2-1/2">Up to</Typography>
   <Typography variant="body1" className="why-feature-bold" id="why-feature-bold-2">4x</Typography>
   <Typography variant="body1" className="why-feature" id="why-feature-2-2/2">increased speeds</Typography>
   </div>

   <div>
   <Typography variant="body1" className="why-feature" id="why-feature-3-1/2">Up to</Typography>
   <Typography variant="body1" className="why-feature-bold" id="why-feature-bold-3">4x</Typography>
   <Typography variant="body1" className="why-feature" id="why-feature-3-2/2">increased speeds</Typography>
   </div>
</Stack>
  </div> );
}
