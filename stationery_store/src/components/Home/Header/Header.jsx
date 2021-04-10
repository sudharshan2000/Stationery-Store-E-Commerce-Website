import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import {Collapse, Button, CssBaseline } from '@material-ui/core';
import {Link} from 'react-router-dom';


const Header = () => {

    const [checked, setChecked] = useState(false);
    const classes = useStyles();

    useEffect(() =>{
        setChecked(true)
    },[]);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Collapse in={checked} {... (checked ? {timeout: 1000} : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Welcome <span className={classes.coloText}>To</span> Your <span className={classes.coloText}>Stationery</span></h1>
                </div>
                <Button type="button" size="large" color="primary" variant = "contained" component= {Link} to="/products">Shop Now</Button>
            </Collapse>
        </div>
    );
};

export default Header;