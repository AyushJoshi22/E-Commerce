// src/components/ProductList.js
import React, { useState } from 'react';
import { Grid, TextField, Container } from '@material-ui/core';
import Product from './Product';
import { products } from '../data';
import { useStyles } from '../styles';

const ProductList = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
        className={classes.searchBar}
      />
      <Grid container spacing={4}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
