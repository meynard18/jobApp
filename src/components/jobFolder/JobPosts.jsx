import { Box, Grid } from '@mui/material';
import React from 'react';
import JobBoard from './JobBoard';
import SortJobs from './SortJobs';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   container: {
      display: 'flex',
      margin: 'auto',
      width: 'max(85%)',
      marginTop: '2rem',
   },
}));

function JobPosts() {
   const classes = useStyles();
   return (
      <Box className={classes.container}>
         <Grid container className={classes.flexItem}>
            <Grid item md={2.5} xs={12}>
               <SortJobs />
            </Grid>
            <Grid item md={9.5} xs={12}>
               <JobBoard />
            </Grid>
         </Grid>
      </Box>
   );
}

export default JobPosts;
