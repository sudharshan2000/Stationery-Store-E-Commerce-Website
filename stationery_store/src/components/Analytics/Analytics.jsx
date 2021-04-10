import React from 'react';
import ProductDemands from './Cards/ProductDemands/ProductDemands';
import UserPurchase from './Cards/UserPurchase/UserPurchase';
import {Divider} from '@material-ui/core';
import useStyles from './styles';

const Analytics = ({data, solddata}) =>{

    const classes = useStyles();

    return(
        <React.Fragment >
            <h1 className={classes.title}>Product Analytics</h1>
            <ProductDemands data={data}/>
            <Divider/>
            <br/><br/>
            <UserPurchase data={solddata}/>
        </React.Fragment>
    );
};

export default Analytics;