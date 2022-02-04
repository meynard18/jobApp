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
   const [searchText, setSearchText] = useState('');
   const [category, setCategory] = useState(0);
   const [sortJobs, setSortJobs] = useState('');

   const handleSortChange = (e) => {
      setSortJobs(e.target.value);
      setJobs(jobs);
   };

   const handleOnClick = (e) => {
      console.log(sortItem[sortJobs]); /// delayed
      // setJobs(jobs.sort((a, b) => b.compensation - a.compensation));
   };

   const handleCategory = (e) => {
      setCategory(e.target.value);
      setJobs(jobs);
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
      console.log(sortJobs);
      console.log(sortItem[sortJobs]);
      // if (sortItem[sortJobs] === 'Compensation') {
      //    console.log('compensation in useEffect');
      //     setJobs(jobs.sort((a, b) => b.compensation - a.compensation));
      // } else if (sortItem[sortJobs] === 'Date') console.log('Date is here');
      // else if (sortItem[sortJobs] === 'Duration') {
      //    console.log('Duration is last');
      //    setJobs(jobs.sort((a,b) => a.duration - b.duration))
      // }

      setJobs(
         jobs.sort((a, b) => {
            if (sortItem[sortJobs] === 'Compensation')
               return b.compensation - a.compensation;
            else if (sortItem[sortJobs] === 'Duration')
               return b.duration - a.duration;
         })
      );

      // console.log(sortItem[sortJobs])
      // switch (sortItem[sortJobs]) {
      //    case 'Compensation':
      //       console.log('compensation from useeffect')
      //       break;
      //    case 'Date':
      //       console.log('date')
      //       break;
      //    case 'Duration':
      //       break;
      // }
   }, [sortJobs]);

   useEffect(() => {
      if (category !== 0)
         setJobs(
            jobs.filter((job) => job.category[0] === categories[category])
         );
      else setJobs(jobs);
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
            <SortJobs
               handleSortChange={handleSortChange}
               sortJobs={sortJobs}
               handleOnClick={handleOnClick}
            />

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
