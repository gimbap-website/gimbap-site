import React from 'react';
import Typography from '@mui/material/Typography';
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';

export default function Features() {
  return (
  <div className="light">
    {/* <GroupWorkRoundedIcon/> */}
      <Typography variant="h5" className="feature-header" id="feature-header-1">Cluster Reccomendations</Typography>
        <Typography variant="body1" className="feature-body" id="feature-body-1">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture. This is just a bit of demo text.</Typography>
        {/* DesignServicesRoundedIcon */}
      <Typography variant="h5" className="feature-header" id="feature-header-2">Real-Time Endpoint Modeling</Typography>
        <Typography variant="body1" className="feature-body" id="feature-body-2">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture. This is just a bit of demo text.</Typography>
        {/* AssessmentRoundedIcon */}
      <Typography variant="h5" className="feature-header" id="feature-header-3">Individual Route Tracking</Typography>
        <Typography variant="body1" className="feature-body" id="feature-body-3">Provide detailed recomendations on where your application could benefit from a move to a microservice architecture. This is just a bit of demo text.</Typography>
  </div> );
}
