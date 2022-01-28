import React, { useEffect, useState } from 'react';
import JobBoard from './JobBoard';
import { makeStyles } from '@mui/styles';
import {
   Box,
   Grid,
   Typography,
   FormControl,
   FormControlLabel,
   RadioGroup,
   FormLabel,
   Radio,
} from '@mui/material';
import data from '../../data/Jobs.json';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const useStyles = makeStyles((theme) => ({
   mainContainer: {
      [theme.breakpoints.down('md')]: {
         flexWrap: 'wrap',
      },
   },
   container1: {
      width: '100%',
      backgroundColor: theme.palette.primary.secondary,
   },

   container2: {
      flexShrink: 0,
      flexGrow: 0,
      backgroundColor: theme.palette.third.secondary,
      width: 'clamp(12rem, 50vw, 14rem)',
      [theme.breakpoints.down('md')]: {
         width: '100%',
      },
   },

   formControl1: {},

   result: {
      paddingBottom: '2rem',
      borderBottom: '1px solid #cecece',
      margin: 'auto',
   },
}));

console.log(data);

function JobPage() {
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      setJobs(data);
   }, []);

   const classes = useStyles();
   return (
      <Box sx={{ mt: 5, display: 'flex' }} className={classes.mainContainer}>
         <Box className={classes.container2}>
            <FormControl sx={{ m: 3 }} className={classes.formControl1}>
               <FormLabel id="demo-radio-buttons-group-label">Sort</FormLabel>
               <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
               >
                  <FormControlLabel
                     value="compensation"
                     control={<Radio />}
                     label="Compensation"
                  />
                  <FormControlLabel
                     value="date"
                     control={<Radio />}
                     label="Date"
                  />
                  <FormControlLabel
                     value="duration"
                     control={<Radio />}
                     label="Duration"
                  />
               </RadioGroup>
            </FormControl>
         </Box>

         <Box className={classes.container1} sx={{ minHeight: '100vh' }}>
            <Grid>
               <Grid container sx={{ mt: 3 }} className={classes.result}>
                  <Grid xs={8} sx={{ ml: 4 }}>
                     Result
                  </Grid>
                  <Grid xs={2}>matches</Grid>
               </Grid>
               <Grid>
                  {jobs.map((job) => (
                     <JobBoard job={job} key={job.id}/>
                     
                  ))}
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
}

export default JobPage;