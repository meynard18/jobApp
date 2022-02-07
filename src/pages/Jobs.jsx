import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import SearchBar from '../components/jobFolder/SearchBar';
import { Box, Grid } from '@mui/material';
import Pagination from '../components/jobFolder/Pagination';
import data from '../data/Jobs.json';
import JobBoard from '../components/jobFolder/JobBoard';
import SortJobs from '../components/jobFolder/SortJobs';

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

const categories = ['Any', 'Front-End', 'Back-End', 'Full-Stack'];
const sortItem = ['Compensation', 'Date', 'Duration'];

function Jobs() {
   const [jobs, setJobs] = useState([]);
   const [searchText, setSearchText] = useState([]);
   const [category, setCategory] = useState(0);
   const [sortJobs, setSortJobs] = useState(null);
   const [sortedJobs, setSortedJobs] = useState([]);

   const handleSortJobs = (e) => {
      setSortJobs(e.target.value)
   }

   const handleCategory = (e) => {
      setCategory(e.target.value);
      setJobs(data);
   };

   const handleSearch = (e) => {
      setSearchText(e.target.value);
   };

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         setJobs(
            jobs.filter((job) =>
               job.position
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
            )
         );
      }
      if (searchText === '') {
         if (e.key) setJobs(data);
      }
   };
   useEffect(() => {
      const _sortedJobs = [...jobs].sort((a, b) => {
         switch (sortItem[sortJobs]) {
            case 'Compensation':
               return b.compensation - a.compensation;
            case 'Date':
               return new Date(b.date) - new Date(a.date);
            case 'Duration':
               return b.duration - a.duration;
         }
      });

      setSortedJobs(_sortedJobs);
   }, [sortJobs]);

   useEffect(() => {
      if (sortedJobs.length) setJobs(sortedJobs);
      else setJobs(jobs);
   }, [sortedJobs]);

   useEffect(() => {
      if (category !== 0)
         setJobs(
            jobs.filter((job) => job.category[0] === categories[category])
         );
      else setJobs(data);
   }, [category]);

   useEffect(() => {
      setJobs(data);
   }, []);

   const classes = useStyles();
   return (
      <Box sx={{ mt: 10 }} className={classes.container}>
         <SearchBar
            handleSearch={handleSearch}
            handleCategory={handleCategory}
            handleKeyDown={handleKeyDown}
            category={category}
         />
         <Box sx={{ mt: 5, display: 'flex' }} className={classes.mainContainer}>
            <SortJobs  sortJobs={sortJobs} handleSortJobs={handleSortJobs} />

            <Box className={classes.container1} sx={{ minHeight: '100vh' }}>
               <Grid>
                  <Grid container sx={{ mt: 3 }} className={classes.result}>
                     <Grid xs={8} sx={{ ml: 4 }}>
                        Result
                     </Grid>
                     <Grid xs={2}>matches</Grid>
                  </Grid>
                  <Grid>
                     <JobBoard jobs={jobs} />
                  </Grid>
               </Grid>
               <Pagination />
            </Box>
         </Box>
      </Box>
   );
}

export default Jobs;
