import React from 'react';

import Stack from '@mui/material/Stack';

//import { SubPage } from './../../types';
import TableOfContents from './TableOfContents';
import Intro from './Intro';
import Installation from './Installation';
import VisualizingYourData from './VisualizingYourData';
import Footer from './../product-page/Footer';
//import ApiDoc from './ApiDoc';
import Credits from './Credits';

export default function Documentation(){

  return (
  <>
      <Stack spacing={2} mt="2%" ml="5%" mr="5%" mb="2%">
        {/* <TableOfContents/> */}
        <Intro />
        <Installation />
        <VisualizingYourData />
        <Credits />
      </Stack>
      <Footer />
  </>);
}
