import React, {useState, useEffect} from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CssBaseline, Divider, Button } from '@material-ui/core';
import ShippingForm from '../ShippingForm';
import PaymentForm from '../PaymentForm';
import {Link} from 'react-router-dom';

import {commerce} from '../../../lib/commerce';
import logo from '../../../assests/logo.jpg';
import useStyles from './styles';

const steps = ['Shipping', 'Payment'];

const Checkout = ({cart, handleEmptyCart}) =>{
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});

    const classes = useStyles();

    useEffect(()=>{
        const generateToken = async ()=>{
            try{
                const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
                setCheckoutToken(token);
            }catch(error){

            }
        }
        generateToken();
    },[cart]);


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


    const next = (data) =>{
        setShippingData(data);

        nextStep();
    }

    const Confirmation = () =>{
        return(
            <React.Fragment>
                <div>
                    <Typography variant="h5" align="center">Thank you for Purchase ...!<br/><br/>
                        <img src={logo} alt="Stationery" height="150px"/>
                    </Typography>
                </div>
                <Divider/>
                <br/><br/>
                <div align="center">
                    <Button component = {Link} to ="/"variant="outlined" type="button" color="secondary">Back to Home</Button><br/><br/>
                    <Button component = {Link} to ="/products"variant="outlined" type="button" color="primary">Purchase More</Button>
                </div>
            </React.Fragment>
        );
    };

    const Form = () => activeStep === 0 ? <ShippingForm checkoutToken={checkoutToken} next={next}/>
     : <PaymentForm shippingData = {shippingData} nextStep={nextStep} checkoutToken={checkoutToken} backStep={backStep} handleEmptyCart={handleEmptyCart}/>

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className= {classes.paper}>
                    <Typography varient = "h4" align="center"> CHECKOUT</Typography>
                    <Stepper activeStep = {activeStep} className={classes.Stepper}>
                        {steps.map((step) =>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>

            </main>
        </React.Fragment>
    );
};

export default Checkout;