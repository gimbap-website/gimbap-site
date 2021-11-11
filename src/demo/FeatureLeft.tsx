import React from 'react';

import clusterDemo from './../../assets/cluster-demo.gif';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function FeatureOne() {
  return (
  <div className="dark section">
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">

        <div className="demoInfo">

          <Typography variant="h4" className="demoFeature">Interactive Cluster Dendrogram</Typography>

          <div id="demo-string">
          Interact with your clustering recommendations to analyze the individual endpoints that have been grouped together based upon a similar covariant score.
          </div>

        </div>

        <div>

          <img src={clusterDemo} className="demoImg"/>

        </div>

    </Stack>
  </div>);
}