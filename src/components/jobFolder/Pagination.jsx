import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   page: {
      justifyContent: 'center',
      backgroundColor: 'red',
   },
}));

export default function PaginationRounded() {
   const classes = useStyles();
   return (
      <Stack spacing={2}>
         <Pagination count={3} shape="rounded" />
      </Stack>
   );
}
