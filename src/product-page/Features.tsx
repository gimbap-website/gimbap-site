import React from 'react';
import Typography from '@mui/material/Typography';
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Example from './../../assets/example';


export default function Features() {
  return (

    <div id="features" className="light section">
        <Box id="features-box" minHeight="100vh" >
        <br></br>
        <br></br>
        <br></br>

          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between">
            <div><Typography variant="h2" id="features-header">Measure Your Application’s Routing Efficiency</Typography></div>
            {/* <Box sx={{ width: '90%', height: '400px', backgroundColor: '#E1DBD2' }}> */}
            <div>
              <img src={Example} style={{ width: '80%', height: '80%' }}/>
              </div>
            {/* </Box> */}
          </Stack>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={12}>
          <div><Typography variant="h5" className="feature-header" id="feature-header-1"><GroupWorkRoundedIcon/>Cluster Reccomendations</Typography>
          <Typography variant="body1" className="feature-body" id="feature-body-1">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture.</Typography>
          </div>

          <div><Typography variant="h5" className="feature-header" id="feature-header-2"><DesignServicesRoundedIcon/>Real-Time Endpoint Modeling</Typography>
          <Typography variant="body1" className="feature-body" id="feature-body-2">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture.</Typography>
          </div>

          <div><Typography variant="h5" className="feature-header" id="feature-header-3"><AssessmentRoundedIcon/>Individual Route Tracking</Typography>
          <Typography variant="body1" className="feature-body" id="feature-body-3">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture.</Typography></div>
        </Stack>
        </Box>
    </div>

  );
}
