import React from 'react';
import {
   Box,
   FormControl,
   FormControlLabel,
   RadioGroup,
   FormLabel,
   Radio,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SortRoundedIcon from '@mui/icons-material/SortRounded';

const useStyles = makeStyles((theme) => ({
   container2: {
      flexShrink: 0,
      flexGrow: 0,
      minHeight: '100%',
      backgroundColor: theme.palette.third.secondary,
      width: 'clamp(12rem, 50vw, 14rem)',
      [theme.breakpoints.down('md')]: {
         width: '100%',
      },
   },

   icon: {
      color: theme.palette.third.fourth,
      fontWeight: 'bolder',
   },

   // flex: {
   //    display: 'flex',
   // },
}));

const sortItem = ['Compensation', 'Date', 'Duration'];

function SortJobs({ sortJobs, handleSortJobs }) {
   const classes = useStyles();
   return (
      <Box className={classes.container2}>
         <FormControl sx={{ m: 3 }} className={classes.formControl1}>
            <div className={classes.flex}>
               <span className={classes.icon}>
                  <SortRoundedIcon sx={{ fontSize: 20 }} />
               </span>
               <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ ml: 1.5, fontWeight: 600, fontSize: 15 }}
               >
                  {' '}
                  Sort:{' '}
               </FormLabel>
            </div>

            <RadioGroup
               aria-labelledby="demo-radio-buttons-group-label"
               name="radio-buttons-group"
               //    value={sortJobs}
               //    onChange={handleSortJobs}
               sx={{ mt: 2, ml: 2.5 }}
            >
               {sortItem.map((item, index) => (
                  <FormControlLabel
                     control={<Radio />}
                     label={item}
                     //  value={index}
                     //  key={item + index}
                  />
               ))}
            </RadioGroup>
         </FormControl>
      </Box>
   );
}

export default SortJobs;
