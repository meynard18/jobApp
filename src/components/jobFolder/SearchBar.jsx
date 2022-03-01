import React, { useState, useContext, useEffect } from 'react';
import {
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   OutlinedInput,
   Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';

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

function SearchBar() {
   const {
      jobs,
      setJobs,
      data,
      setData,
      searchText,
      setSearchText,
      category,
      setCategory,
   } = useContext(JobsContext);

   const handleSearch = (e) => {
      console.log(e.target.value);
      setSearchText(e.target.value);
   };

   const handleKeyDown = (e) => {
      const reg = /[a-zA-Z]/g;
      if (e.key === 'Enter') {
         console.log('enter');
         setJobs(
            jobs.filter(
               (job) =>
                  job.title
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase()) ||
                  job.description
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase())
            )
         );
      }
      if (searchText === '') {
         if (e.key.match(reg)) setJobs(data);
      }
   };

   const handleCategory = (e) => {
      setCategory(e.target.value);
      console.log(e.target.value);
      // alert(e.target.value);
      // console.log('its clicking just fine');
      // setJobs(jobs);
   };

   const classes = useStyles();

   // useEffect(() => {
   //    if (category !== 0)
   //       setJobs(
   //          jobs.filter((job) => job.category[0] === categories[category])
   //       );
   //    else setJobs(data);
   // }, [category]);

   // useEffect(() => {
   //    if (category !== 0) {
   //       setJobs(
   //          jobs.filter(
   //             (job) =>
   //                job.category.toLowerCase() === category.toLocaleLowerCase()
   //          )
   //       );
   //    } else setJobs(data);
   // }, [category]);

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
                  onChange={handleCategory}
                  value={''}
               >
                  {/* {category.map((item) => (
                     <MenuItem>{item}</MenuItem>
                  ))} */}
                  <MenuItem value={0}>{'Any'}</MenuItem>
                  {/* {jobs.filter((item, idx) => (
                     <MenuItem>
                        {item.category.indexOf(item.category) === idx}
                     </MenuItem>
                  ))} */}
                  {jobs.map((item, i) => (
                     <MenuItem key={item.id} value={item.category}>
                        {item.category}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>

            <FormControl size="small" className={classes.formControl2}>
               <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                  Search for Jobs
               </InputLabel>
               <OutlinedInput
                  label="Search for Jobs"
                  variant="outlined"
                  onChange={handleSearch}
                  onKeyPress={handleKeyDown}
                  value={searchText}
                  sx={{ borderRadius: 5 }}
               ></OutlinedInput>
            </FormControl>
         </Box>
      </>
   );
}

export default SearchBar;
