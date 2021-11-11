import React from 'react';

import Stack from '@mui/material/Stack';

import TableOfContents from './TableOfContents';
import Intro from './Intro';
import Installation from './Installation';
import VisualizingYourData from './VisualizingYourData';
import ApiDoc from './ApiDoc';
import Contributors from './Contributors';
import Footer from './../product-page/Footer';

export default function Documentation(): JSX.Element {

  return (<>
    <Stack spacing={2} mt='2%' ml='5%' mr='5%' mb='2%'>
        <TableOfContents />
        <Intro />
        <Installation />
        <VisualizingYourData />
        <ApiDoc />
        <Contributors />
    </Stack>
    <Footer />
</>)}
