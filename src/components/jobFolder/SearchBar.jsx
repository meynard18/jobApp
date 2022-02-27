import React, { useState } from 'react';
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
      width: 'max(85%)',
      margin: 'auto',
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

// const categories = ['Any', 'Front-End', 'Back-End', 'Full-Stack'];

function SearchBar({
   handleSearch,
   searchText,
   handleCategory,
   category,
   handleKeyDown,
}) {
   const classes = useStyles();

   return (
      <>
         <Box className={classes.container} sx={{ mt: 10 }}>
            <FormControl size="small" className={classes.formControl1}>
               <InputLabel htmlFor="categories">Category</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  label="category"
                  variant="outlined"
                  sx={{ borderRadius: 5 }}
                  className={classes.inputStyle}
                  //   onChange={handleCategory}
                  //   value={category}
               >
                  {/* {categories.map((item, index) => (
                     <MenuItem value={index} key={index}>
                        {item}
                     </MenuItem>
                  ))} */}
               </Select>
            </FormControl>

            <FormControl size="small" className={classes.formControl2}>
               <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                  Search for Jobs
               </InputLabel>
               <OutlinedInput
                  label="Search for Jobs"
                  variant="outlined"
                  //   onChange={handleSearch}
                  //   onKeyPress={handleKeyDown}
                  //   value={searchText}
                  sx={{ borderRadius: 5 }}
               ></OutlinedInput>
            </FormControl>
         </Box>
      </>
   );
}

export default SearchBar;
