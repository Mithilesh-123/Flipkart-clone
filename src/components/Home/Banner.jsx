import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';
const usestyle=makeStyles({
    image:{
        width:'100%',
        height:280
    },
    Carousel:{
       marginTop:8 
    }
})
const bannerData = [
    'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50'
];
export default function Banner() {
    const classes=usestyle();
    return (
          <Carousel autoPlay={true} animation='slide' indicators={false}
           navButtonsAlwaysVisible={true} cycleNavigation={true}
           navButtonsProps={{
               style:{
                 background:'#ffffff',
                 color:'#494949' ,
                 
                 borderRadius:0,
                 margin:0 ,height:90,
                 marginTop:-14
               }
            } } className={classes.Carousel}>
            {
                bannerData.map( (image) =>(
                  <img src={image} className={classes.image}/>
                ) )
            }
        </Carousel>
     
    )
}
