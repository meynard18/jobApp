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
import SearchBar from '../components/jobFolder/SearchBar';
import JobPage from '../components/jobFolder/JobPage';


const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
      width: 'max(85%)',
      margin: 'auto',
   },

}));

function Jobs() {
   const classes = useStyles();
   return (
      <Box sx={{ mt: 10 }} className={classes.container}>
         <SearchBar/>
         <JobPage/>
      </Box>
   );
}

export default Jobs;
