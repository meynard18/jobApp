import React from 'react';
import {
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   OutlinedInput,
   Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import JobPosting from '../components/job/JobPosting';
import SearchBar from '../components/job/SearchBar';

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
      width: 'max(85%)',
      margin: 'auto',
   },

   formBox: {
      display: 'flex',
      gap: '1rem',
   },

   inputStyle: {
      position: 'relative',
   },

   formControl1: {
      width: 'clamp(15rem, 30%, 20rem)',
   },
   formControl2: {
      width: '100%',
   },
}));

function Jobs() {
   const classes = useStyles();
   return (
      <Box sx={{ mt: 10 }} className={classes.container}>
        <SearchBar/>
        <JobPosting/>
      </Box>
   );
}

export default Jobs;
