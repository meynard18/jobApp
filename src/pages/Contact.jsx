import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   mainContainer: {
      display: 'flex',
      justifyContent: 'center',
   },

   header: {
      textAlign: 'center',
      fontSize: '4rem',
      color: theme.palette.third.main,
   },
   subHeader: {
      textAlign: 'center',
   },

   spanTextField: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10,
   },
   btn: {
      backGroundColor: 'red',
   },
}));
function Contact() {
   const classes = useStyles();
   return (
      <div className={classes.mainContainer}>
         <Box
            component="form"
            sx={{
               '& > :not(style)': { mt: 5 },
            }}
            noValidate
            autoComplete="off"
         >
            <Typography
               variant="h2"
               component="h2"
               className={classes.header}
               sx={{ fontWeight: 500 }}
            >
               Contact Us
            </Typography>

            <FormControl sx={{ mb: 5 }}>
               <span className={classes.spanTextField}>
                  <TextField
                     style={{ width: '100%' }}
                     id="outlined-basic"
                     label="First Name"
                     variant="outlined"
                     type="text"
                     margin="dense"
                     size="small"
                  />
                  <TextField
                     style={{ width: '100%' }}
                     id="outlined-basic"
                     label="Last Name"
                     variant="outlined"
                     type="text"
                     margin="dense"
                     size="small"
                  />
               </span>
               <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  margin="dense"
                  size="small"
               />
               <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={10}
                  label="Write Your Message"
                  width={900}
                  margin="normal"
                  sx={{ mb: 2 }}
                  size="small"
               />

               <Button
                  variant="contained"
                  className={classes.btn}
                  type="submit"
               >
                  Submit
               </Button>
            </FormControl>
         </Box>
      </div>
   );
}

export default Contact;
