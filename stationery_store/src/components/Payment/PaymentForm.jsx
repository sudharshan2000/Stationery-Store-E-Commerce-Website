import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutItems from './CheckoutItems';

const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken, backStep , handleEmptyCart, nextStep}) => {

    const handleSubmit = (event) =>{
        handleEmptyCart();
        nextStep();
    }

    return (
        <React.Fragment>
            <CheckoutItems checkoutToken={checkoutToken} />
            <Divider />
            <Typography varient="h6" gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <CardElement />
                            <br /> <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onClick={backStep} color="secondary">Back</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </React.Fragment>
    );
};

export default PaymentForm;