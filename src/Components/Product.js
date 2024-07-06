// src/components/Product.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { useStyles } from '../styles';

const Product = ({ product, addToCart }) => {
  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={product.image} title={product.name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography>
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </animated.div>
  );
};

export default Product;
