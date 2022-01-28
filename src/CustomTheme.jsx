import React from 'react';
import {
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@mui/material/styles';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#FFFAFA',
      },
      secondary: {
         main: '#31393C',
      },
      third: {
         main: '#00CCFF',
         secondary: '#F5FEFD',
         third: '#2D5DA1',
         fourth: '#3457D5',
         fifth: ' #4B9CD3',
      },
      error: {
         main: '#FF5349',
      },
      gray: {
         bg: '#eeeeee',
         fW400: '#63645E',
         fW500: '#323232',
         fW600: '#625D5D',
         fW700: '#414A4C',
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
