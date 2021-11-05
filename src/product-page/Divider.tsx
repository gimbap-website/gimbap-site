import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Divider() {
  return (
  <div className="dark">
  <Box
      id="divider-box"
      sx={{
        width: "100%",
        height: 350,
        backgroundColor: '#6C6C6C',
      }}
    >
      {/* All typography goes into the box/divider */}
   <Typography variant="h5" className="why-header" id="why">Why Microservices?</Typography>

   <Typography variant="body1" className="why-feature" id="why-feature-1-1/2">Up to</Typography>
   <Typography variant="body1" className="why-feature-bold" id="why-feature-bold-1">4x</Typography>
   <Typography variant="body1" className="why-feature" id="why-feature-2/2">increased speeds</Typography>

   <Typography variant="body1" className="why-feature" id="why-feature-2-1/2">Up to</Typography>
   <Typography variant="body1" className="why-feature-bold" id="why-feature-bold-2">4x</Typography>
   <Typography variant="body1" className="why-feature" id="why-feature-2-2/2">increased speeds</Typography>

   <Typography variant="body1" className="why-feature" id="why-feature-3-1/2">Up to</Typography>
   <Typography variant="body1" className="why-feature-bold" id="why-feature-bold-3">4x</Typography>
   <Typography variant="body1" className="why-feature" id="why-feature-3-2/2">increased speeds</Typography>
</Box>
  </div> );
}
