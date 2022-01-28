import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerComponent from './DrawerComponent';
import { createTheme } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
   navbar: {
      backgroundColor: theme.palette.primary.main,
      justifyContent: 'space-around',
      [theme.breakpoints.down('xl')]: {
         justifyContent: 'space-between',
        
      },

   },
   navContainer: {
      display: 'flex',
      justifyContent:'center',
   },
   navLink: {
      marginLeft: '40rem',
      [theme.breakpoints.down('xl')]: {
         marginLeft: '25rem',
      },

   },

   logo: {
      display: 'flex',
      alignItems:'center',
   },

   link: {
      fontWeight: '600',
      color: theme.palette.gray.fW700,
      textDecoration: 'none',
      paddingLeft: '2rem',
    
   },
}));

function Navbar() {
   const classes = useStyles();
   const theme = createTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <AppBar position="sticky" className={classes.navContainer}>
         <CssBaseline />
         <Toolbar className={classes.navbar}>
            <Link to="/jobApp" className={classes.logo}>
               <img src={logo} alt="Company Logo" />
            </Link>
            {isMobile ? (
               <DrawerComponent />
            ) : (
               <div className={classes.navLink}>
                  <Link to="/jobs"  className={classes.link}>
                     Jobs
                  </Link>
                  <Link to="/about" className={classes.link}>
                     About Us
                  </Link>

                  <Link to="/contact" className={classes.link}>
                     Contact Us
                  </Link>
               </div>
            )}
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;
