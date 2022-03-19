import React from 'react';
import team from '../images/team.webp';
import team2 from '../images/team2.webp';
import team3 from '../images/team3.webp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Container } from '@mui/material';
const cardContents = [
   {
      cardImg: team3,
      name: 'Andrew Yang',
      position: 'Chief Operating Officer',
   },
   {
      cardImg: team2,
      name: 'Jonathan Murray',
      position: 'Chief Executive Officer',
   },
   {
      cardImg: team,
      name: 'Anna Williams',
      position: 'Chief Human Resources Officer',
   },
];

function CardComponent() {
   return (
      <Container sx={{ mt: 3 }}>
         <Grid container direction="row" justifyContent="center">
            {cardContents.map((item, idx) => (
               <Grid item md={4}>
                  <Card
                     key={idx}
                     sx={{
                        maxWidth: 345,
                        minWidth: 300,
                        m: 3,
                        pointerEvents: 'none',
                     }}
                  >
                     <CardActionArea>
                        <CardMedia
                           component="img"
                           margin="auto"
                           image={item.cardImg}
                           alt="leadership photo"
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              textAlign="center"
                              sx={{ fontWeight: 500 }}
                           >
                              {item.name}
                           </Typography>
                           <Typography
                              variant="body1"
                              component="h3"
                              align="center"
                              color="theme.palette.gray.fW600"
                              sx={{ fontWeight: 500, fontSize: 15 }}
                           >
                              {item.position}
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </Container>
   );
}

export default CardComponent;
