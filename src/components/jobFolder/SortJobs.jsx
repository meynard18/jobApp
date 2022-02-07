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

const useStyles = makeStyles((theme) => ({
   container2: {
      flexShrink: 0,
      flexGrow: 0,
      backgroundColor: theme.palette.third.secondary,
      width: 'clamp(12rem, 50vw, 14rem)',
      [theme.breakpoints.down('md')]: {
         width: '100%',
      },
   },
}));

const sortItem = ['Compensation', 'Date', 'Duration'];

function SortJobs({ sortJobs, handleSortJobs }) {
   const classes = useStyles();
   return (
      <Box className={classes.container2}>
         <FormControl sx={{ m: 3 }} className={classes.formControl1}>
            <FormLabel id="demo-radio-buttons-group-label">Sort</FormLabel>
            <RadioGroup
               aria-labelledby="demo-radio-buttons-group-label"
               name="radio-buttons-group"
               value={sortJobs}
               onChange={handleSortJobs}
            >
               {sortItem.map((item, index) => (
                  <FormControlLabel
                     control={<Radio />}
                     label={item}
                     value={index}
                     key={item + index}
                  />
               ))}
            </RadioGroup>
         </FormControl>
      </Box>
   );
}

export default SortJobs;
