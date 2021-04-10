import React, {useState} from 'react';
import { Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import BarCharts from '../../Charts/Bargraph/BarCharts';

import useStyles from './styles';

const UserPurchase = ({data}) =>{

   const [barData,setBarData] = useState(data);

   const classes = useStyles();

 return(
    <React.Fragment>
        <Card className={classes.root} variant="outlined">
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
            <Card variant="outlined" className={classes.subcard}>
               <BarCharts barData={barData}/>
            </Card>
         </Card>
    </React.Fragment>
 );
};

export default UserPurchase;