import * as React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import heroSection from '../images/heroSection.jpg';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { cyan } from '@mui/material/colors';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CodeIcon from '@mui/icons-material/Code';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

const useStyles = makeStyles((theme) => ({
   container: {
      backgroundImage: `url(${heroSection})`,
      margin: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '120vh',

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
      marginTop: '16rem',
      marginLeft: '4rem',
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
      '&:hover': {
         backgroundColor: '#80deea',
      },
   },

   container2: {
      marginTop: '4rem',
      // backgroundColor: '#F3F2ED',
      minHeight: '80vh',
   },
   header2: {
      fontSize: '3rem',
      color: '#181818',
   },
   subHeader2: {
      fontSize: '1.2rem',
      maxWidth: 500,
      color: '#424242',
   },

   muiIcon: {
      fontSize: 60,
      color: theme.palette.third.fifth,
      textAlign: 'center',
      marginTop: '2rem',
   },
}));

const popularJobs = [
   {
      icon: <DesktopWindowsIcon />,
      title: 'Digital Marketing',
      number: '32 Jobs',
   },
   {
      icon: <BorderColorIcon />,
      title: 'Content Writing',
      number: '14 Jobs',
   },
   {
      icon: <PeopleAltIcon />,
      title: 'HR Management',
      number: '27 Jobs',
   },
   {
      icon: <CodeIcon />,
      title: 'Development',
      number: '35 Jobs',
   },
];

function Home() {
   const classes = useStyles();
   return (
      <Box>
         <Container maxWidth="xl" className={classes.container}>
            <Grid container>
               <Grid xs={12} className={classes.gridBox}>
                  <Box className={classes.overlay}>
                     <Box sx={{ p: 2 }}>
                        <Typography
                           className={classes.subHeader}
                           variant="h4"
                           component="h4"
                           sx={{ fontWeight: 700, ml: 2 }}
                        >
                           Looking for a new career?
                        </Typography>
                        <Typography
                           variant="h1"
                           component="h1"
                           sx={{ fontWeight: 700, ml: 2, mb: -1.5 }}
                           className={classes.header}
                        >
                           IT STARTS HERE
                        </Typography>
                        <Link to={'/jobs'} className={classes.link}>
                           <Button
                              variant="contained"
                              color="btnColor"
                              sx={{
                                 fontWeight: 'bold',
                                 fontSize: 18,
                                 mb: 2,
                                 ml: 2,
                              }}
                              className={classes.btnJob}
                           >
                              Find Jobs
                           </Button>
                        </Link>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Container>
         <Container maxWidth="lg" className={classes.container2}>
            <Grid container>
               <Typography
                  variant="h2"
                  className={classes.header2}
                  sx={{ fontWeight: 500, mb: 2, mt: 4 }}
               >
                  Explore Popular Jobs
               </Typography>
               <Typography
                  variant="h4"
                  component="h1"
                  className={classes.subHeader2}
                  sx={{ fontWeight: 500, mb: 5 }}
               >
                  Get the most exciting jobs around the world and grow your
                  career fast with others
               </Typography>
               <Grid container direction="row" justifyContent="center">
                  {popularJobs.map((item) => (
                     <Card
                        sx={{
                           minWidth: 220,
                           m: 1,
                           mt: 5,
                        }}
                     >
                        <CardActionArea>
                           <div className={classes.muiIcon}>{item.icon}</div>
                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant="h5"
                                 component="div"
                                 sx={{
                                    fontSize: '1.2rem',
                                    textAlign: 'center',
                                    mb: 2,
                                    fontWeight: 500,
                                 }}
                              >
                                 {item.title}
                              </Typography>
                              <Typography
                                 variant="h3"
                                 align="center"
                                 color="#9AA2A4"
                                 sx={{ fontWeight: 500, mb: 1 }}
                              >
                                 {item.number}
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                     </Card>
                  ))}
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
}

export default Home;
