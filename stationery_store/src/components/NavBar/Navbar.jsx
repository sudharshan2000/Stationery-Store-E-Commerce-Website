import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import { ShoppingCart, Home, PieChart, Store} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assests/logo.jpg';
import useStyles from './styles';

const Navbar = ({totalItems}) =>{
    const classes = useStyles();
    const location = useLocation();

    return(
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Stationery" height="25px" className={classes.image} />
                        Stationery Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                    <IconButton aria-label="Home" color="inherit">
                            <Home/>
                            <Typography component = {Link} to ="/" variant="h6" className={classes.title} color="inherit">
                                Home
                            </Typography>
                    </IconButton>
                    {location.pathname !== '/products' && (
                    <IconButton aria-label="Analysis" color="inherit">
                            <Store/>
                            <Typography component = {Link} to ="/products" variant="h6" className={classes.title} color="inherit">
                                Products
                            </Typography>
                    </IconButton>)}
                    <IconButton aria-label="Analysis" color="inherit">
                            <PieChart/>
                            <Typography component = {Link} to ="/analytics" variant="h6" className={classes.title} color="inherit">
                                Analytics
                            </Typography>
                    </IconButton>
                    {location.pathname !== '/cart' && (
                    <IconButton component = {Link} to ="/cart" aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>)}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Navbar;