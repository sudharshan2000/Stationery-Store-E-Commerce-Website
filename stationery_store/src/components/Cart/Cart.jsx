import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

import CartItem from './CartItem/CartItem';

import useStyles from './styles';

const Cart = ({cart, onUpdateQty, onRemove, onEmptyCart}) =>{
    const classes = useStyles();

    const EmptyCart = () =>{
        return(
            <Typography variant="subtitle1">Cart is empty, start adding some!
                <Link to="/products">Shopping Now</Link>
            </Typography>
        );
    };

    const FilledCart = () =>{
        return(
            <React.Fragment>
            <Grid container spacing = {3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateQty = {onUpdateQty} onRemove = {onRemove}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography varient="h1">Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" onClick = {onEmptyCart} color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} component = {Link} to="/checkout" size="large" type="button" variant="contained"  color="primary">Checkout</Button>
                </div>
            </div>
        </React.Fragment>
        );
    }

    if(!cart.line_items) return 'Loading....';

    return(
        <Container>
            <div className = {classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;