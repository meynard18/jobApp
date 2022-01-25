import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { palette } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import logo2 from '../images/logo2.png';

const useStyles = makeStyles((theme) => ({
   container: {
      backgroundColor: theme.palette.coloredBG.main,
      marginTop: '2rem',
      padding: '.7rem 0',
      position: 'relative',
      bottom: '0',
      width: '100%',
   },

   box: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
   },
   icon: {
      fontSize: 28,
      margin: 10,
      color: theme.palette.whiteBG.main,
   },

   copyright: {
     display: 'flex',
     justifyContent:'center',
     color: theme.palette.whiteBG.main,
     fontSize: '1rem',
   },

   span: {
     fontSize: '1rem',
     padding: '0 1rem',
   },
   span2: {
     padding: '.2rem .5rem',
     border: '2px solid white',
     borderRadius: 5,
     marginLeft: '.2rem',
   }
}));

function Footer() {
   const classes = useStyles();
   return (
      <Box className={classes.container}>
         <Grid>
            <Grid xs={12}>
               <Box className={classes.box}>
                  <FacebookIcon className={classes.icon} />
                  <LinkedInIcon className={classes.icon} />
                  <TwitterIcon className={classes.icon} />
               </Box>
               <Box className={classes.copyright}>
                  <Typography >
                    Copyrights &copy; 2022
                  </Typography>
                  <span className={classes.span}>JOB<span className={classes.span2}>HUNT</span></span>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}

export default Footer;