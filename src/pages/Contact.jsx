import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
   mainContainer: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
         padding: '1rem',
      },
   },

   header: {
      textAlign: 'center',
      fontSize: '4rem',
      color: theme.palette.third.main,
   },
   spanTextField: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10,
      [theme.breakpoints.down('md')]: {
         flexDirection: 'column',
      },
   },

   input: {
      [theme.breakpoints.down('lg')]: {
         width: '100%',
      },
   },
}));

const data = localStorage.getItem('input')
   ? JSON.parse(localStorage.getItem('input'))
   : [];
const Contact = () => {
   const classes = useStyles();
   const [inputValues, setInputValues] = useState({
      id: Date.now(),
      firstName: '',
      lastName: '',
      email: '',
      message: '',
   });

   const [storedValues, setStoredValues] = useState([...data]);

   const handleInput = (e) => {
      setInputValues({ ...inputValues, [e.target.name]: e.target.value });
   };

   const saveInputValues = (e) => {
      e.preventDefault();

      const nameCheck = /[a-zA-z]{2}/;
      const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let firstName = inputValues.firstName;
      let lastName = inputValues.lastName;
      let email = inputValues.email;
      let message = inputValues.message;

      if (
         !nameCheck.test(firstName) ||
         !nameCheck.test(lastName) ||
         !emailCheck.test(email) ||
         !nameCheck.test(message)
      )
         return alert('All Fields required');
      else {
         Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            showConfirmButton: false,
            timer: 1500,
         });
      }
      setStoredValues([...storedValues, { ...inputValues }]);
      clearInput();
   };

   const clearInput = () => {
      setInputValues({
         id: Date.now(),
         firstName: '',
         lastName: '',
         email: '',
         message: '',
      });
   };

   useEffect(() => {
      localStorage.setItem('input', JSON.stringify(storedValues));
   }, [storedValues, inputValues]);
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
            <FormControl
               sx={{ mb: 5 }}
               onSubmit={saveInputValues}
               className={classes.input}
            >
               <div className={classes.spanTextField}>
                  <TextField
                     style={{ width: '100%' }}
                     id="outlined-basic"
                     label="First Name"
                     name="firstName"
                     variant="outlined"
                     type="text"
                     margin="dense"
                     size="small"
                     onChange={handleInput}
                     value={inputValues.firstName}
                  />

                  <TextField
                     style={{ width: '100%' }}
                     id="outlined-basic"
                     label="Last Name"
                     variant="outlined"
                     type="text"
                     margin="dense"
                     size="small"
                     name="lastName"
                     onChange={handleInput}
                     value={inputValues.lastName}
                  />
               </div>

               <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  margin="dense"
                  size="small"
                  name="email"
                  onChange={handleInput}
                  value={inputValues.email}
               />
               <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={8}
                  label="Write Your Message"
                  margin="normal"
                  sx={{ mb: 3 }}
                  size="small"
                  name="message"
                  onChange={handleInput}
                  value={inputValues.message}
               />

               <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  onClick={saveInputValues}
               >
                  Submit
               </Button>
            </FormControl>
         </Box>
      </div>
   );
};

export default Contact;
