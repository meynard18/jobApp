import * as React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import heroSection from '../images/heroSection.jpg';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   container: {
      backgroundImage: `url(${heroSection})`,
      margin: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '100vh',

      [theme.breakpoints.down('lg')]: {
         height: '70vh',
      },
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
      },
   },

   subHeader: {
      color: theme.palette.gray.fW500,
      paddingTop: '.7rem',
      fontSize: 32,
      [theme.breakpoints.down('md')]: {
         fontSize: 28,
      },
   },
   header: {
      color: theme.palette.third.main,
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
      paddingBottom: '5rem',
      color: 'orange',
   },
}));

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
                        IT STARTS HERE
                     </Typography>
                     <Link to={'/jobs'} className={classes.link}>
                        <Button
                           variant="contained"
                           color="error"
                           sx={{ fontWeight: 'bold', fontSize: 18 }}
                        >
                           Find Jobs
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
