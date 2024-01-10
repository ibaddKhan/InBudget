import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link ,useNavigate } from 'react-router-dom';

export default function Cardd(props) {
  
  let nav = useNavigate()
  function showSingleProduct() {
    console.log("Clicked at ",props.id);
    nav(`/Singleproducts/${props.id}`)
}
  
  let desc  = props.description.slice(0,60)
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.src}
        title="Fake Items"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h5" align='right'  fontWeight={32} component="div">
          {props.price}$
        </Typography>
        <Typography variant="body2"  color="text.secondary">{desc}...
        </Typography>
      </CardContent>
    <Button size="large" onClick={showSingleProduct}>Shop now</Button>

    </Card>
  );
}