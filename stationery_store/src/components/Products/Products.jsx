import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';


// const products = [
//     {
//         id:1,
//         name:'Think Like a Monk',
//         description:'The secret of how to harness the power of positivity and be happy.',
//         price:'Rs 279',
//         image: 'https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._AC_SX184_.jpg'
//     },
//     {
//         id:2,
//         name:'Pencil Box',
//         description:'Material: Plastic Usage/Application: PENCIL BOXColor: MIX COLORS',
//         price:'Rs 325',
//         image: 'https://5.imimg.com/data5/JY/ZM/KH/SELLER-197076/whatsapp-image-2020-06-18-at-5-20-54-pm-1--250x250.jpeg'
//     },
//     {
//         id:3,
//         name:'Pencil Sharpeners',
//         description:'Usage/Application: School Brand: Nataraj Color: Red Features: Sharpen withour break',
//         price:'Rs 45',
//         image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/UD/KI/UJ/64154989/621-nataraj-pencil-sharpeners-250x250.jpg'
//     },
//     {
//         id:4,
//         name:'Exam Writing Pad',
//         description:'Material: Plastic Brand: INSHOPFITTING.COM Color: 5*11 Inch Gender: Unisex',
//         price:'Rs 150',
//         image: 'https://4.imimg.com/data4/GD/FM/MY-4790354/exam-board-250x250.jpg'
//     },
//     {
//         id:5,
//         name:'Maped Compass',
//         description:'Color:	Multicolor Material: Plastic Brand: Maped',
//         price:'Rs 265',
//         image: 'https://5.imimg.com/data5/TC/OV/VX/SELLER-23265154/maped-metal-open-compass-9-pcs-set-geometry-box-500x500.jpg'
//     },
//     {
//         id:6,
//         name:'Toy Colour Kit',
//         description:'finest quality collection of Kids Toys.',
//         price:'Rs 120',
//         image: 'https://5.imimg.com/data5/BW/WD/IS/ANDROID-38999125/product-jpeg-500x500.jpg'
//     },
//     {
//       id:7,
//       name:'Paint Brushes',
//       description:'Brand: Radhe Krishna Bristle Material: Nylon',
//       price:'Rs 6',
//       image: 'https://5.imimg.com/data5/KS/BO/AC/SELLER-90118285/oil-paint-brushes-250x250.jpg'
//   },
//   {
//     id:8,
//     name:'Scales Ruler',
//     description:'Sold By - Moiz Traders, Maharashtra',
//     price:'Rs 25',
//     image: 'https://5.imimg.com/data5/HE/PE/NG/SELLER-5765400/steel-rules-500x500.jpg'
// }
// ];

const Products = ({ products, onAddToCart, handleItemDetails }) => {
    const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;


  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} handleItemDetails={handleItemDetails}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;