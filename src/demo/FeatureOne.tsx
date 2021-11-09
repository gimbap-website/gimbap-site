import React from 'react';

import featureOneImg from './../../assets/temporaryFeature1';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function FeatureOne() {
  return (<div className="dark section">
    <Stack spacing={6} alignItems="center" justifyContent="center">
        <h1>All the features you'll ever need</h1>
        <Stack direction="row" spacing={12} alignItems="center" justifyContent="center">
        <div className="demoInfo">
            <Typography variant="h4" className="demoFeature">Interactive Cluster Graph</Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo
        </div>
        <div> <img src={featureOneImg}/> </div>
        </Stack>
    </Stack>
  </div>);
}
