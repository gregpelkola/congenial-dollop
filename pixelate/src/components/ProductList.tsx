import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
}));

const Header = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const StyledCard = styled(Card)({
    maxWidth: 345,
    margin: 'auto',
});

const Media = styled(CardMedia)({
    height: 140,
});

const ProductList: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <Container>
            <Header variant='h4' align='center'>Products</Header>
            <Grid2 container spacing={3}>
            {products.map((product: any) => (
                <Grid2 item xs={12} sm={6} md={4} key={product.id}>
                    <StyledCard>
                        <Media
                            image={product.image || 'https://via.placeholder.com/140'}
                            title={product.name}
                        />
                            <CardContent>
                                <Typography variant='h5'>{product.name}</Typography>
                                <Typography>{product.description}</Typography>
                                <Typography>{product.price}</Typography>
                            </CardContent>
                    </StyledCard>
                </Grid2>
            ))}
        </Grid2>
        </Container>
    );
};

export default ProductList;