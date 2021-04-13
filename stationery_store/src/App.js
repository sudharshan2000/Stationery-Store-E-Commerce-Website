import React, { useState, useEffect } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/NavBar/Navbar';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Checkout from './components/Payment/Buy/Checkout';
import Analytics from './components/Analytics/Analytics';
import DemandsData from './components/Data/ProductDemandsData.json';
import SoldData from './components/Data/UserPurchesData.json';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';

import { commerce } from './lib/commerce';
import ProductDetails from './components/ProductDetails/ProductDetails';



const App = () => {
    const [mobileOpen,setMobileOpen] = React.useState(null);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [items, setItems] = useState({}); 
    // const history = useHistory();

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }

    const handleUpdateQty = async(productId,quantity) =>{
        const updateqty = await commerce.cart.update(productId, {quantity});

        setCart(updateqty.cart);
    }

    const handleRemove = async(productId) => {
        const removeproduct = await commerce.cart.remove(productId);

        setCart(removeproduct.cart);
    }

    const handleEmptyCart = async () =>{
        const emptycart = await commerce.cart.empty();
        
        setCart(emptycart.cart);
    }

    const handleItemDetails = (productId) =>{
        setItems(productId);
    }


    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const handleDrawerToogle = () => setMobileOpen(!mobileOpen);

    return (
        <BrowserRouter>
            <React.Fragment>
                <CssBaseline/>
                <Navbar totalItems={cart.total_items} handleDrawerToogle={handleDrawerToogle}/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/products">
                        <Products products={products} onAddToCart={handleAddToCart} handleItemDetails={handleItemDetails}/>
                    </Route>

                    <Route exact path="/cart">
                        <Cart cart={cart} onUpdateQty={handleUpdateQty} onRemove= {handleRemove} onEmptyCart = {handleEmptyCart}/>
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} handleEmptyCart = {handleEmptyCart}/>
                    </Route>

                    <Route exact path="/analytics">
                        <Analytics data={DemandsData} solddata={SoldData}/>
                    </Route>

                    <Route exact path="/productdetails">
                        <ProductDetails items={items} onAddToCart={handleAddToCart}/>
                    </Route>
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
};

export default App;