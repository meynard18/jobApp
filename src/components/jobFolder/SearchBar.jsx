import React, { useContext, useEffect } from 'react';
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
      categoryLabel,

      setPageNumber,
   } = useContext(JobsContext);
   const jobCategories = Array.from(
      new Set(categoryLabel.map((item) => item.category))
   );

   const handleSearch = (e) => {
      setSearchText(e.target.value);
   };

   const handleKeyDown = (e) => {
      const reg = /[a-zA-Z0-9]/g;
      if (e.key === 'Enter') {
         setJobs(
            jobs.filter(
               (job) =>
                  job.title
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase()) ||
                  job.description
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase()) ||
                  job.candidate_required_location
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase())
            )
         );
         setPageNumber(0);
      }
      if (searchText === '' && e.key.match(reg)) {
         category === 0
            ? setJobs(data)
            : setJobs(
                 data.filter((job) =>
                    job.category.toLowerCase().includes(category.toLowerCase())
                 )
              );
      }
   };

   const handleCategory = (e) => {
      setCategory(e.target.value);
      setJobs(data);
   };

   const classes = useStyles();

   useEffect(() => {
      if (category !== 0) {
         setJobs(
            jobs.filter((job) =>
               job.category.toLowerCase().includes(category.toLocaleLowerCase())
            )
         );
         setPageNumber(0);
      } else setJobs(data);
   }, [category]);

   useEffect(() => {}, [jobs]);

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
                  value={category}
               >
                  <MenuItem value={0}>{'Any'}</MenuItem>

                  {jobCategories.map((item, idx) => (
                     <MenuItem key={idx} value={item}>
                        {item}
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
                  placeholder="Position Title, Location, Description"
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
