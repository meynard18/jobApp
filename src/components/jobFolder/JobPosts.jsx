import { Box, Grid } from '@mui/material';
import React from 'react';
import JobBoard from './JobBoard';
import SortJobs from './SortJobs';
import Pagination from './Pagination';
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
            <Grid item lg={2.5} md={4} sm={12}>
               <SortJobs />
            </Grid>
            <Grid item lg={9.5} md={8} sm={12}>
               <JobBoard />
               <Pagination />
            </Grid>
         </Grid>
      </Box>
   );
}

export default JobPosts;
