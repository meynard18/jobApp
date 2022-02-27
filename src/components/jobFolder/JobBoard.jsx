import { React, useContext, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import data from '../../data/Jobs.json';
import JobDetails from './JobDetails';
import { JobsContext } from './JobsContext';

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
      fontSize: '.9rem',
      color: theme.palette.gray.fW400,
   },
   span: {
      background: theme.palette.gray.bg,
      marginRight: '.8rem',
      padding: '.1rem .8rem',
      borderRadius: '10rem',
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
}));

function JobBoard({ pagesVisited, jobsPerPage, setJobDetails }) {
   const handleJobDetails = (job) => {
      console.log(job);
      setJobDetails([job]);
      console.log(setJobDetails([job]));
   };

   const classes = useStyles();
   const jobs = useContext(JobsContext);
   const dot = '. . . ';

   return (
      <Box sx={{ mt: 2, ml: 2 }}>
         <Grid container sx={{ mt: 3 }} className={classes.resultContainer}>
            <Grid xs={8} sx={{ ml: 4, fontWeight: 500, fontSize: 18 }}>
               Result:&nbsp;{' '}
               <span className={classes.resultIcon}>
                  {/* <FontAwesomeIcon icon={faSort} onClick={handleResultIcon} /> */}
               </span>
            </Grid>
            <Grid xs={2}>matches</Grid>
         </Grid>
         {console.log(jobs.map((item) => item))}
         {jobs.map((job) => (
            <>
               <Box>
                  <Typography
                     className={classes.position}
                     sx={{ fontWeight: 600 }}
                  >
                     {job.title}
                  </Typography>
                  <Typography
                     className={classes.description}
                     sx={{ fontWeight: 400, mt: 2, mb: 2 }}
                  >
                     {/* {
                        <div
                           dangerouslySetInnerHTML={{
                              __html: job.description.slice(0, 300),
                           }}
                        />
                     } */}
                     {
                        <span
                           dangerouslySetInnerHTML={{
                              __html: `${job.description.slice(
                                 0,
                                 400
                              )}${dot.repeat(3)}`,
                           }}
                        />
                     }
                  </Typography>
                  <Typography>
                     {console.log(job.tags)}
                     {job.tags.map((languages, i) =>
                        i < 6 ? (
                           <span className={classes.span}>{languages}</span>
                        ) : (
                           ''
                        )
                     )}
                  </Typography>

                  <Typography sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
                     <span className={classes.nameValue}>
                        Rate:{' '}
                        <span className={classes.value}>
                           {job.salary === '' ? 'negotiable' : job.salary}
                        </span>
                     </span>
                     <span className={classes.nameValue}>
                        Location:{' '}
                        <span className={classes.value}>
                           {job.candidate_required_location}
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
         ))}
         {/* {jobs.slice(pagesVisited, pagesVisited + jobsPerPage).map((job) => (
            <>
               <Box
                  className={classes.hoverEffect}
                //   key={job.id}
                //   onClick={() => handleJobDetails(job)}
               >
  
                  <Typography sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
                     <span className={classes.nameValue}>
                        Rate:{' '}
                        <span className={classes.value}>
                           {job.compensation < 100
                              ? job.compensation + ' /hour'
                              : job.compensation + ' /yearly'}
                        </span>
                     </span>
                     <span className={classes.nameValue}>
                        Duration:{' '}
                        <span className={classes.value}>
                           {job.duration > 1
                              ? job.duration + ' months'
                              : job.duration + ' year'}
                        </span>
                     </span>
                     <span className={classes.nameValue}>
                        Posted:{' '}
                        <span className={classes.value}>{job.date}</span>
                     </span>
                  </Typography>
               </Box>
            </>
         ))} */}
      </Box>
   );
}

export default JobBoard;
