import React from 'react';
import {TextField, Grid} from '@material-ui/core';


const CustomTextField = ({name, label, type}) =>{
    return (
        <Grid item xs={12} sm={6}>
            <TextField label={label} name={name} required fullWidth type={type}/>
        </Grid>
    );
}

export default CustomTextField;