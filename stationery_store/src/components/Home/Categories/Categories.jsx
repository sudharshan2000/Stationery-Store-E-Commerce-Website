import React from 'react';
import useStyles from './styles';
import {Grid} from '@material-ui/core';
import Category from './Category/Category';

const products = [
    {
        id:1,
        image:"https://images-na.ssl-images-amazon.com/images/I/813MZAh6vuL._SL1500_.jpg",
        titleName: "Pencils",
        desc:"A pencil case or pencil box is a container used to store pencils. A pencil case can also contain a variety of other stationery such as sharpeners, pens.",
        link: '/products',
    },

    {
        id:2,
        image:"https://5.imimg.com/data5/TestImages/ZW/SY/ST/SELLER-10046168/promotional-plastic-pencil-box-500x500.jpeg",
        titleName:"Boxes",
        desc:"That includes choices in material and form as well as graphics, colors and fonts that are used on wrapping, a box, a can, a bottle or any kind of container.",
        link:'/products',
    },

    {
        id:3,
        image:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
        titleName:"Books",
        desc:"Whether it's a physical copy or an e-book, readers are more concerned with the content inside it colors and fonts that are used on wrapping",
        link:'/products',
    },

    {
        id:4,
        image:"https://m.media-amazon.com/images/S/aplus-media/sc/c5d6ada5-98ac-4949-a3d2-855fd8f1d800.__CR0,0,970,600_PT0_SX970_V1___.jpg",
        titleName:"Paints",
        desc:"The basic white pigments include zinc oxide, zinc sulfide, lithopone, and titanium dioxide. Most black pigments are composed of elemental carbon.",
        link:'/products',
    },

];

const Categories = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Category product={product}/>
          </Grid>
        ))}
      </Grid>
        </div>
    );
};

export default Categories;