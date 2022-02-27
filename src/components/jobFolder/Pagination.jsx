// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { makeStyles } from '@mui/styles';
// import { useState } from 'react';
// import ArrowLeft from '@mui/icons-material/ArrowLeft';
// import ArrowRight from '@mui/icons-material/ArrowRight';
// import { PaginationItem } from '@mui/material';

// const useStyles = makeStyles((theme) => ({

// }));

// function PaginationRounded({setPageNumber, pageCount }) {
//    const handlePage = (e, page) => {
//       setPageNumber(page - 1);
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//    };
//    const classes = useStyles();

//    return (
//       <Stack spacing={2}>
//          <Pagination
//             onChange={handlePage}
//             count={pageCount}
//             shape="rounded"
//             className={classes.pagination}
//             renderItem={(item) => (
//                <PaginationItem sx={{fontSize: 16}}
//                  components={{ previous: ArrowLeft, next: ArrowRight }}
//                  {...item}
//                />
//              )}
//             sx={{ display: 'flex', justifyContent: 'center'}}
//          />
//       </Stack>
//    );
// }
// export default PaginationRounded;
