import React from 'react';

import metricsDemo from './../../assets/metrics-demo.gif';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function FeatureRight() {
  return (<div className="light section">
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">

      <div>
        <img src={metricsDemo} className="demoImg"/>
      </div>

      <div className="demoInfo">

      <Typography variant="h4" className="demoFeature">Track Individual Routes</Typography>

        <div id="demo-string">Evaluate individual endpoints' call time performance to learn more about traffic within specific sectors of an application.
        </div>

      </div>

    </Stack>
  </div>);
}