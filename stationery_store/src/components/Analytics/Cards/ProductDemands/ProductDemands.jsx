import React, {useState} from 'react';
import { Card, CardContent, Typography, Button, CardActions} from '@material-ui/core';

import useStyles from './styles';
import LineCharts from '../../Charts/Line/LineChart';

const ProductDemands = ({data}) => {

   const [lineData,setLineData] = useState(data);

   const classes = useStyles();

   return (
      <React.Fragment>
         <Card className={classes.root} variant="outlined">
            <Card variant="outlined" className={classes.subcard}>
               <CardContent>
                  <Typography variant="h5" align="center">Product Demands Analytics</Typography>
                  <Typography variant="h6" align="center">Year (2020)</Typography>
                  <Card variant="outlined" className={classes.details}>
                     <CardContent>
                        <  Typography variant="h6" >X-axis contains: <u>Months</u></Typography>
                        <  Typography variant="h6" >Y-axis contains: <u>Product Demands in Thousand</u></Typography>
                     </CardContent>
                     <CardActions>
                     <Button type="button" color="primary" variant="contained" align="center" onClick={() => setLineData(data)}>Refresh</Button>
                     </CardActions>
                  </Card>
               </CardContent>
            </Card>
            <Card variant="outlined" className={classes.subcard}>
               <LineCharts lineData={lineData}/>
            </Card>
         </Card>
      </React.Fragment>
   );
};

export default ProductDemands;