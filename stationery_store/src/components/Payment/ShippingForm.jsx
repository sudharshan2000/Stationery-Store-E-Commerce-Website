import React, {useState, useEffect} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import CustomTextField from './CustomTextField';
import {commerce} from '../../lib/commerce';
import {Link} from 'react-router-dom';


const ShippingForm = ({checkoutToken, next}) =>{
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState({});
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id:code, label: name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id:code, label: name}));

    const fetchCountries = async (checkoutTokenId) =>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivision = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    useEffect(()=>{
        fetchCountries(checkoutToken.id);
    },[]);

    useEffect(()=>{
        if(shippingCountry) fetchSubdivision(shippingCountry);
    },[shippingCountry]);


    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next ({...data, shippingCountry, shippingSubdivision}))}>
                    <Grid container spacing={3}> 
                        <CustomTextField name='firstName' label='First Name' type='text'/>
                        <CustomTextField name='lastName' label='Last Name' type='text'/>
                        <CustomTextField name='address' label='Address' type='text'/>
                        <CustomTextField name='email' label='Email' type='email'/>
                        <CustomTextField name='city' label='City' type='text'/>
                        <CustomTextField name='zip' label='Zip/Postel Code' type='number'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                <MenuItem key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <Button component = {Link} to='/cart' variant="outlined">Back to cart</Button>
                        <Button type = 'submit' variant="contained" color='primary'>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
}

export default ShippingForm;