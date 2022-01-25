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
         secondary: '#F8F8FF',
      },
      coloredBG: {
         main: '#31393C',
      },
      blue: {
         main: '#00CCFF',
         secondary: '#F0F8FF',
      },
      grayText: {
         main: '#414A4C',
      },
      primaryText: {
         main: '#323232',
      },
      secondaryText: {
         main: '#625D5D',
      },
      accent: {
         main: '#323232',
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
      button: {
         textTransform: 'none',
         fontWeight: 500,
      },
   },
});
