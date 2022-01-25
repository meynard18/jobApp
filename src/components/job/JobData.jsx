import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const jobDetails = [
   {
      jobPosition: 'Front End Developer',
      jobDescription:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente officia est dicta, eligendi reprehenderit voluptate aliquid porro consequatur esse.',
      jobSkills: 'HTML CSS',
      jobCategory: 'hello',
   },
];

const useStyles = makeStyles((theme) => ({
    jobPosition: {
        color: 'red',
    },

}))

function JobData() {

    const classes = useStyles()
   return (
      <Box sx={{ m: 5 }}>
         {jobDetails.map((item) => (
            <>
               <Typography className={classes.jobPosition}>{item.jobPosition}</Typography>
               <Typography>{item.jobDescription}</Typography>
               <Typography>{item.jobSkills}</Typography>
               <Typography>{item.jobCategory}</Typography>
            </>
         ))}
      </Box>
   );
}

export default JobData;
