import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, ImageListItem } from '@mui/material';
import { Typography } from '@mui/material';
import heroSection from '../images/heroSection.jpg';
import { makeStyles } from '@mui/styles';
import { fontSize } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
   container: {
      backgroundImage: `url(${heroSection})`,
      margin: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      [theme.breakpoints.down('md')]: {
         height: '90vh',
      },
   },

   gridBox: {
      [theme.breakpoints.down('lg')]: {
         display: 'flex',
         justifyContent: 'center',
      },
   },

   overlay: {
      marginTop: '12rem',
      marginLeft: '2rem',
      background: 'rgb(255,255,255, 0.85)',
      borderRadius: 10,
      height: 'auto',
      width: '32rem',
      [theme.breakpoints.down('lg')]: {
         margin: '8rem auto',
         textAlign: 'center',
      },
      [theme.breakpoints.down('sm')]: {
         width: '18rem',
         backgroundColor: 'lightgreen',
      },
   },

   subHeader: {
      color: theme.palette.grayText.main,
      paddingTop: '.7rem',
      fontSize: 32,
      [theme.breakpoints.down('md')]: {
         fontSize: 28,
      },
   },
   header: {
      color: theme.palette.blueText.main,
      fontSize: 66,
      paddingBottom: '1.5rem',
      [theme.breakpoints.down('md')]: {
         fontSize: 56,
         paddingBottom: '1rem',
      },
      [theme.breakpoints.down('sm')]: {
         fontSize: 52,
         paddingBottom: '1rem',
      },
   },

   link: {
      textDecoration: 'none',
   },

   btnJob: {
      color: 'red',
      paddingBottom: '5rem',
   },
}));

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

function Home() {
   const classes = useStyles();
   return (
      <Container maxWidth="xl" className={classes.container}>
         <Grid container>
            <Grid xs={12} className={classes.gridBox}>
               <Box className={classes.overlay}>
                  <Box sx={{ p: 2 }}>
                     <Typography
                        className={classes.subHeader}
                        variant="h4"
                        component="h4"
                        sx={{ fontWeight: 700 }}
                     >
                        Looking for a new career?
                     </Typography>
                     <Typography
                        variant="h1"
                        component="h1"
                        sx={{ fontWeight: 700 }}
                        className={classes.header}
                     >
                        SUCCESS BEGINS HERE
                     </Typography>
                     <Link to={'/jobs'} className={classes.link}>
                        <Button
                           variant="contained"
                           color="error"
                           className={classes.btnJob}
                           sx={{ fontWeight: 'bold', fontSize: 18 }}
                        >
                           Find Job <ArrowForwardIosIcon />
                        </Button>
                     </Link>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
}

export default Home;
