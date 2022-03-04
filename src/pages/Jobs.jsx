import React, { useEffect, useState } from 'react';
import { JobsContext } from '../components/jobFolder/JobsContext';
import { makeStyles } from '@mui/styles';
import SearchBar from '../components/jobFolder/SearchBar';
import { Box, Grid } from '@mui/material';
// import Pagination from '../components/jobFolder/Pagination';
import JobPosts from '../components/jobFolder/JobPosts';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSort } from '@fortawesome/free-solid-svg-icons';
// import JobDetails from '../components/jobFolder/JobDetails';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
      // width: 'max(85%)',
      // margin: 'auto',
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

   resultIcon: {
      fontSize: '1.1rem',
      cursor: 'pointer',
      color: theme.palette.gray.fW400,
   },
}));

// const categories = ['Any', 'Front-End', 'Back-End', 'Full-Stack'];
// const sortItem = ['Compensation', 'Date', 'Duration'];

// function Jobs() {
//    const [jobs, setJobs] = useState([]);
//    const [searchText, setSearchText] = useState([]);
//    const [category, setCategory] = useState(0);
//    const [sortJobs, setSortJobs] = useState(null);
//    const [sortedJobs, setSortedJobs] = useState([]);
//    const [pageNumber, setPageNumber] = useState(0);
//    const [isReversed, setIsReversed] = useState(false);
//    const [jobDetails, setJobDetails] = useState([]);

//    const handleResultIcon = () => {
//       setIsReversed(!isReversed);
//       setJobs(jobs.reverse());
//    };

//    useEffect(() => {
//       const _sortedJobs = [...jobs].sort((a, b) => {
//          switch (sortItem[sortJobs]) {
//             case 'Compensation':
//                return b.compensation - a.compensation;
//             case 'Date':
//                return new Date(b.date) - new Date(a.date);
//             case 'Duration':
//                return b.duration - a.duration;
//          }
//       });

//       setSortedJobs(_sortedJobs);
//    }, [sortJobs]);

//    useEffect(() => {
//       if (sortedJobs.length) setJobs(sortedJobs);
//       else setJobs(jobs);
//    }, [sortedJobs]);

//    return (
//       <Box sx={{ mt: 10 }} className={classes.container}>
//          <SearchBar
//             handleSearch={handleSearch}
//             handleCategory={handleCategory}
//             handleKeyDown={handleKeyDown}
//             category={category}
//          />
//          <Box sx={{ mt: 5, display: 'flex' }} className={classes.mainContainer}>
//             <SortJobs sortJobs={sortJobs} handleSortJobs={handleSortJobs} />

//             <Box className={classes.container1} sx={{ minHeight: '100vh' }}>
//                <Grid>
//                   <Grid
//                      container
//                      sx={{ mt: 3 }}
//                      className={classes.resultContainer}
//                   >
//                      <Grid xs={8} sx={{ ml: 4, fontWeight: 500, fontSize: 18 }}>
//                         Result:&nbsp;{' '}
//                         <span className={classes.resultIcon}>
//                            <FontAwesomeIcon
//                               icon={faSort}
//                               onClick={handleResultIcon}
//                            />
//                         </span>
//                      </Grid>
//                      <Grid xs={2}>matches</Grid>
//                   </Grid>
//                   <Grid>
//                      <JobBoard
//                         className={classes.jobBoard}
//                         jobs={jobs}
//                         pagesVisited={pagesVisited}
//                         jobsPerPage={jobsPerPage}
//                         setJobDetails={setJobDetails}
//                      />
//                   </Grid>
//                   <JobDetails jobDetails={jobDetails} />
//                </Grid>
//                <Pagination
//                   pageCount={pageCount}
//                   setPageNumber={setPageNumber}
//                />
//             </Box>
//          </Box>
//       </Box>
//    );
// }

// export default Jobs;

function Jobs() {
   const [data, setData] = useState([]);
   const [jobs, setJobs] = useState([]);
   const [searchText, setSearchText] = useState();
   const [pageNumber, setPageNumber] = useState(0);
   const [category, setCategory] = useState(0);
   const [sortedJobs, setSortedJobs] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');
   const [categoryLabel, setCategoryLabel] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   // const handlePage = (page) => {
   //    setPageNumber(page - 1);
   //    document.body.scrollTop = 0;
   //    document.documentElement.scrollTop = 0;
   // };

   const jobsPerPage = 10;
   const pagesVisited = pageNumber * jobsPerPage;
   const pageCount = Math.ceil(jobs.length / jobsPerPage);

   {
      console.log(pageNumber);
   }

   const searchStates = {
      categoryLabel,
      setCategoryLabel,
      data,
      setData,
      jobs,
      setJobs,
      searchText,
      setSearchText,
      category,
      setCategory,
      errorMessage,
      setErrorMessage,
      jobsPerPage,
      pagesVisited,
      pageCount,
      pageNumber,
      setPageNumber,
      sortedJobs,
      setSortedJobs,
   };
   const classes = useStyles();

   const fetchData = async () => {
      try {
         const result = await axios(
            `https://remotive.io/api/remote-jobs?limit=50`
         );
         // console.log(result.data.jobs.category.map((item) => item));
         const {
            resultData,
            data: { jobs },
         } = result;

         setJobs(jobs);
         setData(jobs);
         setCategoryLabel(jobs);
      } catch (error) {
         setErrorMessage(error.message);
      }
   };
   useEffect(() => {
      fetchData();
   }, []);

   return (
      <JobsContext.Provider value={searchStates}>
         <Box className={classes.container}>
            <SearchBar />
            <JobPosts />
         </Box>
      </JobsContext.Provider>
   );
}

export default Jobs;
