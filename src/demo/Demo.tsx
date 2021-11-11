import React from 'react';
import FeatureLeft from './FeatureLeft';
import FeatureRight from './FeatureRight';
import Footer from './../product-page/Footer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Demo(){

  return (
  <>
      <div className="dark"><Stack spacing={6} alignItems="center" justifyContent="center">
      <Typography id="demo-title">Demo</Typography>
      </Stack></div>
      <FeatureLeft />
      <FeatureRight />
      <Footer />
  </>);
}
