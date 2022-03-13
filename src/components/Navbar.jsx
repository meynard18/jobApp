import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Toolbar, CssBaseline, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerComponent from './DrawerComponent';
import { createTheme, styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
   navContainer: {
      display: 'flex',
      justifyContent: 'center',
   },
   navbar: {
      width: '89%',
      margin: 'auto',
      borderBottom: '1px solid #cecece',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xl')]: {
         width: '100%',
         justifyContent: 'space-between',
      },
   },
   navLink: {
      [theme.breakpoints.down('xl')]: {
         marginLeft: '25rem',
      },
      [theme.breakpoints.down('lg')]: {
         marginLeft: '18rem',
      },
   },

   logo: {
      display: 'flex',
      alignItems: 'center',
   },

   link: {
      fontSize: 15,
      flexWrap: 'none',
      fontWeight: 600,
      color: theme.palette.gray.fW600,
      textDecoration: 'none',
      padding: '0 1rem',
      '&:hover': {
         color: 'black',
      },
   },
}));

function Navbar() {
   const classes = useStyles();
   const theme = createTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <StyledAppbar
         position="sticky"
         className={classes.navContainer}
         elevation={0}
      >
         <CssBaseline />
         <Toolbar className={classes.navbar}>
            <Link to="/jobApp" className={classes.logo}>
               <img
                  src={logo}
                  alt="Company Logo"
                  sx={{ width: 'auto', height: 'auto' }}
               />
            </Link>
            {isMobile ? (
               <DrawerComponent />
            ) : (
               <div className={classes.navLink}>
                  <Link to="/jobs" className={classes.link}>
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
      </StyledAppbar>
   );
}

export default Navbar;
const StyledAppbar = styled(AppBar)`
   background-color: white;
`;
