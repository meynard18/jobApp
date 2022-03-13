import React from 'react';
import team from '../images/team.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Container } from '@mui/material';
const cardContents = [
   {
      cardImg: team3,
      cardTitle: 'Chief Operating Officer',
   },
   {
      cardImg: team2,
      cardTitle: 'Chief Executive Officer',
   },
   {
      cardImg: team,
      cardTitle: 'Chief Human Resources Officer',
   },
];

function CardComponent() {
   return (
      <Container sx={{ mt: 3 }}>
         <Grid container direction="row" justifyContent="center">
            {cardContents.map((item, idx) => (
               <Card sx={{ maxWidth: 345, m: 3 }} key={idx}>
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        height="400"
                        image={item.cardImg}
                        alt="green iguana"
                     />
                     <CardContent>
                        <Typography
                           gutterBottom
                           variant="h5"
                           component="div"
                        ></Typography>
                        <Typography
                           variant="body1"
                           component="h3"
                           align="center"
                           color="theme.palette.gray.fW600"
                           sx={{ fontWeight: 600 }}
                        >
                           {item.cardTitle}
                        </Typography>
                     </CardContent>
                  </CardActionArea>
               </Card>
            ))}
         </Grid>
      </Container>
   );
}

export default CardComponent;
