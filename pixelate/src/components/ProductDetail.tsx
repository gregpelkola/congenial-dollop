import React, { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string}>();
    const { product, setProduct } = useState<any>(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}/`)
        .then(response => setProduct(response.data))
        .catch(error => console.error(error));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <Card>
            <CardContent>
                <Typography variant='h5'>{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>{product.price}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetail;