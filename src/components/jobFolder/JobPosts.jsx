import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import JobBoard from './JobBoard';
import SortJobs from './SortJobs';
import Pagination from './Pagination';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const useStyles = makeStyles((theme) => ({
   container: {
      display: 'flex',
      margin: 'auto',
      width: 'max(85%)',
      marginTop: '2rem',
      boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.1)',
      [theme.breakpoints.down('md')]: {
         flexWrap: 'wrap',
      },
   },

   loading: {
      display: 'inline-block',
      margin: 'auto',
      justifyContent: 'center',
   },
}));

function JobPosts() {
   const { isLoading, errorMessage } = useContext(JobsContext);
   const classes = useStyles();
   return (
      <Box className={classes.container}>
         <Grid container className={classes.flexItem}>
            <Grid item lg={2.5} md={4} sm={12}>
               <SortJobs />
            </Grid>
            {errorMessage.length > 0 ? (
               /////// HANDLING ERRORS AND DATA LOADING STATUS ////////////////

               <Typography
                  sx={{ fontSize: 50, fontWeight: 500, margin: 'auto' }}
               >
                  <ErrorOutlineIcon /> {errorMessage}
               </Typography>
            ) : isLoading ? (
               <div className={classes.loading}>
                  <Typography sx={{ fontSize: 50 }}>Loading...</Typography>
               </div>
            ) : (
               <Grid item lg={9.5} md={8} sm={12}>
                  <JobBoard />
                  <Pagination />
               </Grid>
            )}
         </Grid>
      </Box>
   );
}

export default JobPosts;
