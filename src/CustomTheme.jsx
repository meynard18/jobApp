import React from 'react';
import {
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@mui/material/styles';

export const theme = createTheme({
   palette: {
      primaryBG: {
         main: '#FFFAFA',
      },
      secondary: {
         main: '#31393C',
      },
      third: {
         main: '#005A92',
         secondary: '#F5FEFD',
         third: '#2D5DA1',
         fourth: '#3457D5',
         fifth: ' #4B9CD3',
         sixth: '#00CCFF',
      },
      btnColor: {
         main: '#00CCFF',
         contrastText: 'white',
      },
      gray: {
         bg: '#eeeeee',
         fW400: '#63645E',
         fW500: '#323232',
         fW600: '#625D5D',
         fW700: ' #565051',
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
      // fontSize: 10,
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      h1: {
         fontSize: 66,
         '@media (max-width:480px)': {
            fontSize: 56,
         },
         '@media (max-width:360px)': {
            fontSize: 46,
         },
      },
      h2: {
         fontSize: 58,
         '@media (max-width:480px)': {
            fontSize: 48,
         },
         '@media (max-width:360px)': {
            fontSize: 42,
         },
      },

      h4: {
         fontSize: 16,
         '@media (max-width:480px)': {
            fontSize: 28,
         },
      },
      body1: { fontSize: 14 },

      button: {
         textTransform: 'none',
         fontWeight: 500,
      },
   },
});
