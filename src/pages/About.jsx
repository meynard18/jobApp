import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import employee from '../images/about.jpeg';

import { makeStyles } from '@mui/styles';
import CardComponent from '../components/CardComponent';

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
   },

   heading: {
      color: theme.palette.fW500,
      fontSize: '4rem',
      paddingBottom: '1rem',
      [theme.breakpoints.down('lg')]: {
         textAlign: 'center',
         fontSize: '3rem',
      
      },
   },
   heading2: {
      color: theme.palette.fW500,
      fontSize: '4rem',
      [theme.breakpoints.down('lg')]: {
         fontSize: '3rem',
      
      },

   },
   aboutText: {
      color: theme.palette.fW600,
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
}));

function About() {
   const classes = useStyles();
   return (
      <Container maxWidth="xl" className={classes.container}>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
               <Box sx={{ mt: 7 }}>
                  <Typography
                     variant="h1"
                     component="h1"
                     sx={{ fontWeight: 500 }}
                     className={classes.heading}
                  >
                     Who We Are
                  </Typography>
                  <Typography className={classes.aboutText} variant='body1'>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Eum sapiente odit nisi quibusdam magni consequuntur
                     voluptates nemo molestias quod ipsa cupiditate debitis
                     corporis vero beatae perspiciatis quia distinctio quas,
                     omnis illo. Facere consectetur quidem architecto eos
                     voluptatem ducimus libero amet nobis laboriosam obcaecati,
                     asperiores, deserunt saepe mollitia temporibus est nisi
                     repellat perferendis in labore. Sapiente laboriosam, iure
                     repellat iste quo optio voluptatum nam, quos facere nemo ut
                     explicabo ipsum sit alias atque magnam vero voluptatibus
                     consectetur eius sunt eveniet. Ab, et dignissimos cumque
                     neque ratione dolorum earum magnam illum necessitatibus.
                  </Typography>
               </Box>
            </Grid>

            <Grid item xs={12} md={6}>
               <img
                  src={employee}
                  alt="Employees at work talking"
                  className={classes.image}
               />
            </Grid>
            <Grid xs={12} align="center" sx={{ mt: 3 }}>
               <Typography variant="h2" component="h1" className={classes.heading2} sx={{fontWeight: 500, mt: 8}}>
                  Meet Our Team
               </Typography>
            </Grid>
         </Grid>
         <CardComponent/>

      </Container>
   );
}

export default About;
