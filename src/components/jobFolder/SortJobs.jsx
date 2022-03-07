import React, { useEffect } from 'react';
import {
   Box,
   FormControl,
   FormControlLabel,
   RadioGroup,
   FormLabel,
   Radio,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import { useContext } from 'react';
import { JobsContext } from './JobsContext';

const useStyles = makeStyles((theme) => ({
   container2: {
      flexShrink: 0,
      flexGrow: 0,
      minHeight: '100%',
      backgroundColor: theme.palette.third.secondary,
      width: 'clamp(12rem, 50vw, 14rem)',
      [theme.breakpoints.down('md')]: {
         width: '100%',
      },
   },

   icon: {
      color: theme.palette.third.fourth,
      fontWeight: 'bolder',
   },
}));

const jobType = ['Full-Time', 'Part-Time', 'Other'];

function SortJobs() {
   const {
      category,
      data,
      setJobs,
      jobs,
      sortedJobs,
      setSortedJobs,
      setPageNumber,
      searchText,
   } = useContext(JobsContext);

   const handleSortJobs = (e) => {
      setSortedJobs(e.target.value);
      console.log(e.target.value);

      setJobs(data);
   };

   const jobTypeFilter = () => {
      setPageNumber(0);
      if (!category) {
         setJobs(
            jobs.filter((item) => {
               switch (jobType[sortedJobs]) {
                  case 'Full-Time':
                     return item.job_type.includes('full_time');
                  case 'Part-Time':
                     return item.job_type.includes('part_time');
                  case 'Other':
                     return (
                        !item.job_type.includes('part_time') &&
                        !item.job_type.includes('full_time')
                     );
               }
            })
         );
      } else {
         console.log('there is category');
         setJobs(
            jobs.filter((item) => {
               switch (jobType[sortedJobs]) {
                  case 'Full-Time':
                     return (
                        item.job_type.includes('full_time') &&
                        item.category
                           .toLowerCase()
                           .includes(category.toLowerCase())
                     );
                  case 'Part-Time':
                     return (
                        item.job_type.includes('part_time') &&
                        item.category
                           .toLowerCase()
                           .includes(category.toLowerCase())
                     );
                  case 'Other':
                     return (
                        !item.job_type.includes('part_time') &&
                        !item.job_type.includes('full_time') &&
                        item.category
                           .toLowerCase()
                           .includes(category.toLowerCase())
                     );
               }
            })
         );
      }
   };

   const classes = useStyles();

   useEffect(() => {
      jobTypeFilter();
   }, [sortedJobs]);

   return (
      <Box className={classes.container2}>
         <FormControl sx={{ m: 3 }} className={classes.formControl1}>
            <div className={classes.flex}>
               <span className={classes.icon}>
                  <SortRoundedIcon sx={{ fontSize: 20 }} />
               </span>
               <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ ml: 1.5, fontWeight: 600, fontSize: 15 }}
               >
                  {' '}
                  Job-Type:{' '}
               </FormLabel>
            </div>

            <RadioGroup
               aria-labelledby="demo-radio-buttons-group-label"
               name="radio-buttons-group"
               value={sortedJobs}
               onChange={handleSortJobs}
               sx={{ mt: 2, ml: 2.5 }}
            >
               {jobType.map((item, index) => (
                  <FormControlLabel
                     control={<Radio />}
                     label={item}
                     value={index}
                     key={item + index}
                  />
               ))}
            </RadioGroup>
         </FormControl>
      </Box>
   );
}

export default SortJobs;
