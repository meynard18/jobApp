import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import SearchBar from '../components/jobFolder/SearchBar';
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
import Pagination from '../components/jobFolder/Pagination';
import data from '../data/Jobs.json';
import JobBoard from '../components/jobFolder/JobBoard';

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
      width: 'max(85%)',
      margin: 'auto',
   },
   mainContainer: {
      boxShadow: '-1px 0px 5px 0px rgba(0,0,0,0.1)',
      [theme.breakpoints.down('md')]: {
         flexWrap: 'wrap',
      },
   },
   container1: {
      width: '100%',
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

   result: {
      paddingBottom: '2rem',
      borderBottom: '1px solid #cecece',
      margin: 'auto',
   },
}));

function Jobs() {
   const [jobs, setJobs] = useState([]);
   const [searchText, setSearchText] = useState('');

   const handleSearch = (e) => {
      console.log(e.target.value);
      setSearchText(e.target.value);
   };

   useEffect(() => {
      setJobs(data);
   }, []);

   function search(jobs) {
      return jobs.filter((job) =>
         job.position.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
   }
   const classes = useStyles();
   return (
      <Box sx={{ mt: 10 }} className={classes.container}>
         <SearchBar handleSearch={handleSearch} />
         <Box sx={{ mt: 5, display: 'flex' }} className={classes.mainContainer}>
            <Box className={classes.container2}>
               <FormControl sx={{ m: 3 }} className={classes.formControl1}>
                  <FormLabel id="demo-radio-buttons-group-label">
                     Sort
                  </FormLabel>
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
                     <JobBoard jobs={search(jobs)} />
                  </Grid>
               </Grid>
               <Pagination />
            </Box>
         </Box>
      </Box>
   );
}

export default Jobs;
