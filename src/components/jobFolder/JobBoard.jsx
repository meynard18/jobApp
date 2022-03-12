import { React, useContext, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import { ArrowCircleDown } from '@mui/icons-material';
import JobsModal from './JobsModal';

const useStyles = makeStyles((theme) => ({
   position: {
      color: theme.palette.third.fourth,
   },

   resultContainer: {
      paddingBottom: '1rem',
      borderBottom: '1px solid #cecece',
      margin: 'auto',
   },

   hoverEffect: {
      cursor: 'pointer',
      padding: '.5rem',
      '&:hover': {
         backgroundColor: theme.palette.third.secondary,
      },
   },

   description: {
      color: theme.palette.gray.fW400,
   },
   span: {
      background: theme.palette.gray.bg,
      marginRight: '.8rem',
      color: theme.palette.gray.fW500,
      padding: '.1rem .8rem',
      borderRadius: '10rem',
      display: 'inline-block',
   },

   nameValue: {
      color: theme.palette.gray.fW600,
      fontSize: '.8rem',
   },

   value: {
      color: theme.palette.third.fifth,
      marginRight: '.5rem',
      paddingRight: '.4rem',
   },

   result: {
      display: 'flex',
      alignItems: 'center',
   },

   resultIcon: {
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: theme.palette.gray.fW400,
   },
}));

function JobBoard() {
   const [isReversed, setIsReversed] = useState(false);
   const classes = useStyles();
   const {
      jobs,
      setJobs,
      errorMessage,
      setErrorMessage,
      pagesVisited,
      jobsPerPage,
      setJobsModal,
      searchText,
      jobsModal,
      handleOpen,
      isLoading,
   } = useContext(JobsContext);
   const dot = '. . ';

   const handleResultIcon = () => {
      setIsReversed(!isReversed);
      setJobs(jobs.reverse());
   };

   const handleJobsModal = (job) => {
      setJobsModal([job]);
      handleOpen();
   };

   const displayJobs = jobs
      .slice(pagesVisited, pagesVisited + jobsPerPage)
      .map((job) => (
         <>
            <Box
               className={classes.hoverEffect}
               sx={{ mb: 3 }}
               onClick={() => {
                  handleJobsModal(job);
               }}
            >
               <Typography
                  className={classes.position}
                  sx={{ fontWeight: 600, fontSize: 18 }}
               >
                  {job.title}
               </Typography>
               <Typography
                  variant="body1"
                  className={classes.description}
                  sx={{ fontWeight: 400, mt: 2, mb: 3 }}
               >
                  {`${job.description
                     .replace(/(<([^>]+)>)/gi, '')
                     .slice(0, 220)}${dot.repeat(2)}`}
               </Typography>
               <Typography sx={{ fontWeight: 500 }}>
                  {job.tags.map((languages, i) =>
                     i < 6 ? (
                        <span className={classes.span} key={i}>
                           {languages}
                        </span>
                     ) : (
                        ''
                     )
                  )}
               </Typography>

               <Typography sx={{ fontWeight: 600, mt: 2 }}>
                  <span className={classes.nameValue}>
                     Salary:{' '}
                     <span className={classes.value}>
                        {job.salary === ''
                           ? 'Depends on Experience'
                           : job.salary}
                     </span>
                     <span></span>
                  </span>
                  <span className={classes.nameValue}>
                     Location:{' '}
                     <span className={classes.value}>
                        {job.candidate_required_location === ''
                           ? 'Remote'
                           : job.candidate_required_location.length < 10
                           ? job.candidate_required_location
                           : job.candidate_required_location.slice(0, 20)}
                     </span>
                  </span>
                  <span className={classes.nameValue}>
                     Posted:{' '}
                     <span className={classes.value}>
                        {job.publication_date}
                     </span>
                  </span>
               </Typography>
            </Box>
         </>
      ));

   return (
      <Box sx={{ mt: 1, ml: 2 }}>
         <Grid container sx={{ mt: 3 }} className={classes.resultContainer}>
            <Grid xs={8} sx={{ ml: 4, fontWeight: 500, fontSize: 18 }}>
               <span className={classes.result}>
                  {' '}
                  Result:&nbsp;
                  <ArrowCircleDown
                     onClick={handleResultIcon}
                     className={classes.resultIcon}
                     sx={{
                        transform: isReversed
                           ? 'rotate(180deg)'
                           : 'rotate(0deg)',
                        transition: '.2s',
                     }}
                  />
               </span>
            </Grid>
            <Grid xs={2}>matches</Grid>
         </Grid>

         {displayJobs}
         <span>
            <JobsModal />
         </span>
      </Box>
   );
}

export default JobBoard;
