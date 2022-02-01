import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   position: {
      color: theme.palette.third.fourth,
   },

   hoverEffect: {
      padding: '1rem',

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

function JobBoard(props) {
   const classes = useStyles();
   return (
      <Box sx={{ m: 1 }} className={classes.hoverEffect}>
         <Typography className={classes.position} sx={{ fontWeight: 600 }}>
            {props.job.position}
         </Typography>
         <Typography
            className={classes.description}
            sx={{ fontWeight: 400, mt: 2, mb: 2 }}
         >
            {props.job.description}
         </Typography>
         {props.job.language.map((languages) => (
            <span className={classes.span}>{languages}</span>
         ))}
         <Typography sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
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
