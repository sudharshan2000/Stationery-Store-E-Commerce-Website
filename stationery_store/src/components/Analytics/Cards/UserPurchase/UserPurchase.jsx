import React, {useState} from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid} from '@material-ui/core';
import BarCharts from '../../Charts/Bargraph/BarCharts';

import useStyles from './styles';

const UserPurchase = ({data}) =>{

   const [barData,setBarData] = useState(data);

   const classes = useStyles();

 return(
    <React.Fragment>
        <Card className={classes.root} variant="outlined">
        <Grid container direction="row" justify="center" alignItems="center" item xs={12} sm={12} md={12} lg={12}>
            <Card variant="outlined" className={classes.subcard}>
               <CardContent>
                  <Typography variant="h5" align="center">Product Purchase Analytics</Typography>
                  <Typography variant="h6" align="center">Year (2020)</Typography>

                  <Card variant="outlined" className={classes.details}>
                     <CardContent>
                        <  Typography variant="h6">X-axis contains: <u>Product Categories</u></Typography>
                        <  Typography variant="h6" >Y-axis contains: <u>Product Solds</u></Typography>
                     </CardContent>
                     <CardActions>
                     <Button type="button" color="primary" variant="contained" align="center" onClick={() => setBarData(data)}>Refresh</Button>
                     </CardActions>
                  </Card>

               </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <BarCharts barData={barData}/>
            </Grid>
         </Card>
    </React.Fragment>
 );
};

export default UserPurchase;