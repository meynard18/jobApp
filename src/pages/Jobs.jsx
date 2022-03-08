import React, { useEffect, useState } from 'react';
import { JobsContext } from '../components/jobFolder/JobsContext';
import { makeStyles } from '@mui/styles';
import SearchBar from '../components/jobFolder/SearchBar';
import { Box, Grid } from '@mui/material';
import JobPosts from '../components/jobFolder/JobPosts';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
      marginBottom: '2rem',
   },
}));

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
   const [jobsModal, setJobsModal] = useState([]);
   const [open, setOpen] = React.useState(false);

   const jobsPerPage = 10;
   const pagesVisited = pageNumber * jobsPerPage;
   const pageCount = Math.ceil(jobs.length / jobsPerPage);

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const searchStates = {
      open,
      setOpen,
      handleOpen,
      handleClose,
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
      pageNumber,
      setPageNumber,
      sortedJobs,
      setSortedJobs,
      jobsModal,
      setJobsModal,
      jobsPerPage,
      pagesVisited,
      pageCount,
      isLoading,
   };
   const classes = useStyles();

   const fetchData = async () => {
      setIsLoading(true);
      try {
         const {
            result,
            data: { jobs },
         } = await axios(`https://remotive.io/api/remote-jobs?limit=200`);

         setJobs(jobs);
         setData(jobs);
         setCategoryLabel(jobs);
         setIsLoading(false);
      } catch (error) {
         console.log(error);
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
