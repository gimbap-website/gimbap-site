import React from 'react';
import Typography from '@mui/material/Typography';
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';



// import ClusterGraph from './../../assets/sample-graph.png';
//style={{width: '100%', height: '100%', object-fit: 'contain'}}
export default function Features() {
  return (

    <div id="features" className="light section">
      {/* <ClusterGraph /> */}
      <Stack spacing={{xs:3}}>
        <Box>
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between">
            {/* <div style={{"flex":1}}><Typography variant="h2" id="features-header">Measure Your Application’s Routing Efficiency</Typography></div>
            <div style={{"flex":1}}><img src="https://res.cloudinary.com/dcgcphyrt/image/upload/v1636132834/index_pcykh1.png"/></div> */}
            <div><Typography variant="h2" id="features-header">Measure Your Application’s Routing Efficiency</Typography></div>
            <div>
              <img style={{"object-fit" : "contain", "height" : "100%", "width" : "100%"}} src="https://res.cloudinary.com/dcgcphyrt/image/upload/v1636132834/index_pcykh1.png"/>
            </div>
          </Stack>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{xs:7}}>
          <div><Typography variant="h5" className="feature-header" id="feature-header-1"><GroupWorkRoundedIcon/>Cluster Reccomendations</Typography>
          <Typography variant="body1" className="feature-body" id="feature-body-1">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture.</Typography>
          </div>

          <div><Typography variant="h5" className="feature-header" id="feature-header-2"><DesignServicesRoundedIcon/>Real-Time Endpoint Modeling</Typography>
          <Typography variant="body1" className="feature-body" id="feature-body-2">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture.</Typography>
          </div>

          <div><Typography variant="h5" className="feature-header" id="feature-header-3"><AssessmentRoundedIcon/>Individual Route Tracking</Typography>
          <Typography variant="body1" className="feature-body" id="feature-body-3">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture.</Typography></div>
        </Stack>
      </Stack>
    </div>
  );
}
