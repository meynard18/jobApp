import React from 'react';
import { Grid, Box } from '@mui/material';
import { Select, MenuItem, FormControl, InputLabel, Input } from '@mui/material';

function Jobs() {
   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value=''
               label="Age"
              //  onChange={handleChange}
            >
               <MenuItem value={10}>Ten</MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           
            <Input>
            </Input>
         </FormControl>
      </Box>
   );
}

export default Jobs;
