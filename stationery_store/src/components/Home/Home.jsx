import React from 'react';
import useStyles from './styles';
import {CssBaseline} from '@material-ui/core';
import Header from './Header/Header';
import Categories from './Categories/Categories';

const Home = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Categories/>
        </div>
    );
};

export default Home;