import React from 'react'
import {Box,makeStyles} from '@material-ui/core'
const usestyle=makeStyles({
    mid:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
    }
})
const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];
const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
export default function Midsec() {
    const classes=usestyle();
    return (
        <>
        <Box   className={classes.mid}>
            {
              ImageURL.map(image=>(
                  <img src={image} style={{width:"33%"}} />
              ))
            }
        </Box>
        <img src={coronaURL} style={{width:"100%"}}/>
        </>
    )
}
