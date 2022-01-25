import React from 'react';
import {
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   OutlinedInput,
   Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: '100vh',
      width: 'max(85%)',
      margin: 'auto',
   },

   formBox: {
      display: 'flex',
      gap: '1rem',
   },

   inputStyle: {
      position: 'relative',
   },

   formControl1: {
      width: 'clamp(15rem, 30%, 20rem)',
   },
   formControl2: {
      width: '100%',
   },
}));

function SearchBar() {
   const classes = useStyles();
   return (
      <>
         <Box className={classes.formBox}>
            <FormControl size="small" className={classes.formControl1}>
               <InputLabel htmlFor="categories">Category</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  //  id="demo-simple-select"
                  //  value=""
                  label="category"
                  labelId="categories"
                  variant="outlined"
                  sx={{ borderRadius: 5 }}
                  className={classes.inputStyle}
                  //  onChange={handleChange}
               >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
               </Select>
            </FormControl>

            <FormControl size="small" className={classes.formControl2}>
               <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                  Search for Jobs
               </InputLabel>
               <OutlinedInput
                  label="Search for Jobs"
                  variant="outlined"
                  sx={{ borderRadius: 5 }}
               ></OutlinedInput>
            </FormControl>
         </Box>
      </>
   );
}

export default SearchBar;
