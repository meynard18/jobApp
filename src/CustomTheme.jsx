import React from 'react';
import {
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@mui/material/styles';
import { fontWeight } from '@mui/system';

export const theme = createTheme({
   palette: {
      whiteBG: {
         main: '#FFFAFA',
      },
      coloredBG: {
         main: '#31393C',
      },
      blueText: {
         main: '#007FFF',
      },
      grayText: {
         main: '#333333',
      },
      primaryText: {
         main: '#323232',
      },
      secondaryText: {
         main: '#242124',
      },
      accent: {
         main: '#323232',
         // main: '#E41C38',
         
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 480,
         md: 768,
         lg: 1024,
         xl: 1200,
         xxl: 1366,
      },
   },
   typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '1rem',
   },
});
