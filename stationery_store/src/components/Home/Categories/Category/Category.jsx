import React from 'react';
import {Card,CardActionArea, CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';


const MediaCard = ({product}) =>{
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {product.titleName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
          {product.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" component = {Link} to={product.link}>
          Open
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;