import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Singleproducts = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='main-div'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={product.image}
                        title={product.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" align='right' fontWeight={32} component="div">
                            {product.price}$
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <Button size="large">Shop now</Button>
                </Card>
            </div>
        </>
    );
};

export default Singleproducts;
