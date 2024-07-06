// src/pages/Home.js
import React from 'react';
import ProductList from '../Components/ProductList';
import { Typography, Container } from '@material-ui/core';
import { useStyles } from '../styles';

const Home = ({ addToCart }) => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to Our Store
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Find the best products at unbeatable prices.
          </Typography>
        </Container>
      </div>
      <ProductList addToCart={addToCart} />
    </main>
  );
};

export default Home;
