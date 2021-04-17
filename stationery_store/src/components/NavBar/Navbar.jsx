import React, { useState } from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography,MenuItem, Menu} from '@material-ui/core';
import { ShoppingCart, Home, PieChart, Store, MoreVert} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assests/logo.jpg';
import useStyles from './styles';

const Navbar = ({totalItems}) =>{
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu className = {classes.menuButton} anchorEl={mobileMoreAnchorEl} anchorOrigin={{vertical : 'top', horizontal:'right'}} id={mobileMenuId} keepMounted transformOrigin={{vertical : 'top', horizontal:'right'}} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            
            <MenuItem component = {Link} to ="/home">
                <IconButton aria-label="Home" color="inherit">
                    <Home/>
                </IconButton>
                <p>Home</p>
            </MenuItem>

            <MenuItem component = {Link} to ="/products">
                <IconButton aria-label="Home" color="inherit">
                    <Store/>
                </IconButton>
                <p>Products</p>
            </MenuItem>

            <MenuItem component = {Link} to ="/analytics">
                <IconButton aria-label="Home" color="inherit">
                    <PieChart/>
                </IconButton>
                <p>Analytics</p>
            </MenuItem>

            <MenuItem component = {Link} to ="/cart">
                <IconButton aria-label="Show Cart Items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    return(
        <React.Fragment>
            <AppBar position="static" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Stationery" height="25px" className={classes.image} />
                        Stationery Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
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
                    </div>
                    <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </React.Fragment>
    );
};

export default Navbar;