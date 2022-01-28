import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import data from '../../data/Jobs.json';

const useStyles = makeStyles((theme) => ({
   position: {
      color: theme.palette.third.fourth,
   },

   hoverEffect: {

      '&:hover': {
         backgroundColor: theme.palette.third.secondary,
      },
   },

   description: {
      fontSize: '.9rem',
   },
   span: {
      background: '#eeeeee',
      marginRight: '1rem',
      padding: '.1rem .8rem',
      borderRadius: '10rem',
   },

   nameValue: {
      fontSize: '.8rem',
   },

   value: {
      color: 'red',
      marginRight: '.5rem',
      padding: '.4rem .6rem',
   },
}));

function JobBoard(props) {
   const classes = useStyles();
   return (
      <Box sx={{ m: 5 }} className={classes.hoverEffect}>
         <Typography className={classes.position} sx={{ fontWeight: 600 }}>
            {props.job.position}
         </Typography>
         <Typography
            className={classes.description}
            sx={{ fontWeight: 'light' }}
         >
            {props.job.description}
         </Typography>
         {props.job.language.map((languages) => (
            <span className={classes.span}>{languages}</span>
         ))}
         <Typography sx={{ fontWeight: 600 }}>
            <span className={classes.nameValue}>
               Rate:{' '}
               <span className={classes.value}>{props.job.compensation}</span>
            </span>
            <span className={classes.nameValue}>
               Duration:{' '}
               <span className={classes.value}>{props.job.duration}</span>
            </span>
            <span className={classes.nameValue}>
               Posted: <span className={classes.value}>{props.job.date}</span>
            </span>
         </Typography>
      </Box>
   );
}

export default JobBoard;
