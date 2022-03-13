import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import employee from '../images/aboutIMG.jpg';

import { makeStyles } from '@mui/styles';
import CardComponent from '../components/CardComponent';

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
      marginBottom: '2rem',
      [theme.breakpoints.down('xxl')]: {
         '@media (orientation: landscape)': {
            minHeight: '100vh',
         },
      },
   },

   header: {
      color: theme.palette.gray.fW500,
      paddingBottom: '1rem',
      [theme.breakpoints.down('lg')]: {
         textAlign: 'center',
         fontSize: '3rem',
      },
   },

   subHeader: {
      color: theme.palette.gray.fW500,
      [theme.breakpoints.down('lg')]: {
         textAlign: 'center',
      },
   },
   heading2: {
      color: theme.palette.gray.fW500,
      fontSize: '4rem',
      [theme.breakpoints.down('lg')]: {
         fontSize: '3rem',
      },
   },
   aboutText: {
      color: theme.palette.gray.fW500,
      width: '90%',
      margin: 'auto',
      [theme.breakpoints.down('lg')]: {
         margin: 'auto',
         textAlign: 'center',
         width: '100%',
      },
   },

   image: {
      marginTop: '3rem',
      width: '100%',
      objectFit: 'contain',
   },

   imageContainer: {
      display: 'inline-block',
      alignSelf: 'center',
   },
}));

function About() {
   const classes = useStyles();
   return (
      <Container maxWidth="xl" className={classes.container}>
         <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
            <Grid item xs={12} lg={5} xl={6} md={6}>
               <Box sx={{ mt: 7 }}>
                  <Typography
                     component="h1"
                     variant="h1"
                     sx={{ fontWeight: 500, fontSize: 60 }}
                     className={classes.header}
                  >
                     About Us
                  </Typography>
                  <Typography
                     className={classes.subHeader}
                     component="h2"
                     variant="h4"
                     sx={{ fontSize: 22, mb: 2, fontWeight: 500 }}
                  >
                     Our vision is to connect businesses with talent and improve
                     lives through better careers.
                  </Typography>
                  <Typography
                     className={classes.aboutText}
                     variant="body1"
                     sx={{ fontSize: 16 }}
                  >
                     With our understanding and insights on each market, as well
                     our passion for technology, we provide jobseekers the best
                     opportunities and deliver exceptional value to employers.
                     We are committed to continuously improving the value we
                     provide to jobseekers and employers. To deliver on this, we
                     continue to evolve our product and service offerings to
                     better facilitate the matching of jobseekers to employers.
                  </Typography>
               </Box>
            </Grid>

            <Grid
               item
               xs={12}
               xl={6}
               lg={7}
               md={6}
               className={classes.imageContainer}
            >
               <img
                  src={employee}
                  alt="Employees at work talking"
                  className={classes.image}
               />
            </Grid>
            <Grid item xs={12} align="center" sx={{ mt: 3 }}>
               <Typography
                  variant="h3"
                  component="h2"
                  className={classes.heading2}
                  sx={{ fontWeight: 500, mt: 8 }}
               >
                  Meet Our Team
               </Typography>
            </Grid>
         </Grid>
         <CardComponent />
      </Container>
   );
}

export default About;
