import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

import useStyles from './styles';

const Product = ({product, onAddToCart,handleItemDetails}) => {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button className={classes.button} size="large" type="button" variant='contained' color="primary" component={Link} to='/productdetails' onClick={() => handleItemDetails([product.id,product.name,product.price.formatted_with_symbol,product.description,product.media.source])}>View</Button>
            </CardActions>
        </Card>
        </React.Fragment>
    );
};

export default Product;