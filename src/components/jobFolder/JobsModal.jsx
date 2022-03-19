import React, { useContext } from 'react';
import { JobsContext } from './JobsContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   modalStyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 1000,
      height: 550,
      backgroundColor: 'white',
      boxShadow: 24,
      padding: 24,
      overflowY: 'scroll',
      overflowX: 'hidden',
      outline: 'none',
      [theme.breakpoints.down('xl')]: {
         height: '80%',
         width: '90%',
      },
   },

   detailsContainer: {
      padding: '1.5rem',
   },

   span: {
      background: theme.palette.gray.bg,
      margin: '0 .8rem .5rem 0',
      padding: '.1rem .8rem',
      borderRadius: '10rem',
      overflowWrap: 'break-word',
      display: 'inline-block',
   },
   nameValue: {
      color: theme.palette.gray.fW600,
      fontSize: '.8rem',
      display: 'inline-block',
   },

   value: {
      color: theme.palette.third.fifth,
      marginRight: '.5rem',
      paddingRight: '.4rem',
   },
   jobTitle: {
      color: theme.palette.third.fourth,
   },
   closeBtn: {
      color: 'red',
   },
}));

export default function BasicModal() {
   const { jobsModal, open, handleClose } = useContext(JobsContext);

   const classes = useStyles();
   return (
      <div>
         {jobsModal.map((item) => (
            <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box className={classes.modalStyle}>
                  <Button onClick={handleClose}>
                     <span className={classes.closeBtn}>X</span> &nbsp; Close
                  </Button>
                  <Box className={classes.detailsContainer}>
                     <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ mt: 2, fontWeight: 600, fontSize: 30 }}
                        className={classes.jobTitle}
                     >
                        {item.title}
                     </Typography>

                     {
                        <Typography
                           dangerouslySetInnerHTML={{
                              __html: item.description,
                           }}
                        />
                     }
                     <div className={classes.langContainer}>
                        <Typography className={classes.tags}>
                           {item.tags.map((languages, i) => (
                              <span className={classes.span} key={i}>
                                 {languages}
                              </span>
                           ))}
                        </Typography>
                     </div>

                     <Typography variant="h2" sx={{ mt: 2, fontWeight: 500 }}>
                        <span className={classes.nameValue}>
                           Job Type:&nbsp;&nbsp;
                           <span className={classes.value}>
                              {item.job_type.toUpperCase().replace(/_/, '-')}
                           </span>
                        </span>
                        <span className={classes.nameValue}>
                           Location:&nbsp;&nbsp;
                           <span className={classes.value}>
                              {item.candidate_required_location.toUpperCase()}
                           </span>
                        </span>
                        <span className={classes.nameValue}>
                           Salary:&nbsp;&nbsp;
                           <span className={classes.value}>
                              {item.salary === ''
                                 ? `DEPENDS ON EXPERIENCE`
                                 : item.salary}
                           </span>
                        </span>
                     </Typography>
                  </Box>
               </Box>
            </Modal>
         ))}
      </div>
   );
}
