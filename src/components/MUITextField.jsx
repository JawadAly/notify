import React from 'react';
import TextField from '@mui/material/TextField';

const MUITextField = (props) =>{
    return <TextField 
    fullWidth 
    id="filled-basic"
    label={props.label}
    variant="filled" 
    multiline={props.isMultiline}
    rows={5}
    name={props.name}
    value={props.val}
    onChange={props.onChng}
    />;
}
export default MUITextField;