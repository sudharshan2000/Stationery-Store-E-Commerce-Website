import React from 'react';
import { Card, CardContent, Typography,CardMedia,CardActions,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const ProductDetails = ({ items, onAddToCart }) => {

    const classes = useStyles();


    return (
        <React.Fragment>
            <Card className={classes.root} variant="outlined">
                <CardMedia className={classes.media}>
                    <img src={items[4]} alt='itemimage' style={{backgrounSize:'contain', backgroundRepeat: 'no-repeat'}}/>
                </CardMedia>
                <CardContent>
                    <Typography style={{color:'rgb(247,92,30)'}} variant="h3" align="center" gutterBottom>{items[1]}</Typography>
                    <Typography variant="h7"  gutterBottom dangerouslySetInnerHTML={{ __html: items[3]}}/>
                    <Typography variant="h5" gutterBottom >{items[2]}</Typography>
                </CardContent>
            </Card>
            <Card>
            <CardActions style={{justifyContent:'center'}}>
                <Button className={classes.button} component = {Link} to='/products' variant="outlined" color="secondary" size="large">Back</Button>
                    <Button className={classes.button} type="button" component={Link} variant='contained' to='/cart' color="primary" size="large" onClick={() => onAddToCart(items[0],1)}>Add to Cart</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
};

export default ProductDetails;