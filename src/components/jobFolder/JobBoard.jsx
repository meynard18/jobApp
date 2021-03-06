import React, { useContext, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import { ArrowCircleDown } from '@mui/icons-material';
import JobsModal from './JobsModal';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const useStyles = makeStyles((theme) => ({
   position: {
      color: theme.palette.third.fourth,
   },

   resultContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 1.5rem .5rem 1.5rem',
      marginTop: '2rem',
      marginBottom: '2rem',
      borderBottom: '1px solid #cecece',
      color: theme.palette.gray.fW500,
      [theme.breakpoints.down('sm')]: {
         paddingLeft: 0,
         paddingRight: 0,
      },
   },

   hoverEffect: {
      cursor: 'pointer',
      padding: '.5rem',
      '&:hover': {
         backgroundColor: theme.palette.third.secondary,
      },
   },

   description: {
      color: theme.palette.gray.fW600,
   },
   spanLanguages: {
      background: theme.palette.gray.bg,
      marginRight: '.8rem',
      color: theme.palette.gray.fW500,
      padding: '.1rem .8rem',
      borderRadius: '10rem',
      display: 'inline-block',
      marginTop: '.5rem',
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
      pagesVisited,
      jobsPerPage,
      setJobsModal,
      handleKeyDown,

      handleOpen,
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
         <React.Fragment key={job.id}>
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
                  sx={{ mt: 2, mb: 3, fontSize: 15 }}
               >
                  {`${job.description
                     .replace(/(<([^>]+)>)/gi, '')
                     .slice(0, 220)}${dot.repeat(2)}`}
               </Typography>
               <Typography sx={{ fontWeight: 500 }}>
                  {job.tags.map((languages, i) =>
                     i < 6 ? (
                        <span className={classes.spanLanguages} key={i}>
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
         </React.Fragment>
      ));

   return (
      <Box sx={{ mt: 1, ml: 2, mr: 2 }}>
         <Box container className={classes.resultContainer}>
            <Typography
               variant="subtitle1"
               component="subtitle1"
               sx={{
                  fontSize: 18,
                  display: 'flex',
                  fontWeight: 500,
               }}
            >
               {' '}
               Result:&nbsp;
               <ArrowCircleDown
                  onClick={handleResultIcon}
                  className={classes.resultIcon}
                  sx={{
                     transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)',
                     transition: '.2s',
                  }}
               />
            </Typography>
            <Typography variant="subtitle2">{`${
               jobs.length <= 1
                  ? `${jobs.length}` + ' Match'
                  : `${jobs.length}` + ' Matches'
            }`}</Typography>
         </Box>

         {jobs.length >= 1 ? (
            displayJobs
         ) : (
            <Typography
               variant="h3"
               component="h5"
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  mt: 6,
                  fontSize: 28,
               }}
            >
               <ErrorOutlineIcon sx={{ fontSize: 32, mr: 1, mb: 2 }} /> Job
               listing not Found
            </Typography>
         )}
         <span>
            <JobsModal />
         </span>
      </Box>
   );
}

export default JobBoard;
