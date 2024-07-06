// src/components/Cart.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, Container } from '@material-ui/core';
import { Add, Remove, Delete } from '@material-ui/icons';
import { useStyles } from '../styles';

const Cart = ({ cart, incrementQuantity, decrementQuantity, removeFromCart, checkout }) => {
  const classes = useStyles();
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">{item.name}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => decrementQuantity(item.id)}>
                    <Remove />
                  </IconButton>
                  {item.quantity}
                  <IconButton onClick={() => incrementQuantity(item.id)}>
                    <Add />
                  </IconButton>
                </TableCell>
                <TableCell align="right">${item.price * item.quantity}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">${totalAmount}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={checkout} style={{ marginTop: '20px' }}>
        Checkout
      </Button>
    </Container>
  );
};

export default Cart;
