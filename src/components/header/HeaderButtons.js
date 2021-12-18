import { useState } from 'react';
import React from 'react'
import { Box,Button, makeStyles,Typography,Badge } from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import LoginDialog from '../Login/Login';
const usestyle=makeStyles({
    login:{
     background:'#FFFFFF',
     color:'#2874f0',
     textTransform:'none',
     fontWeight:600,
     borderRadius:2,
     paddinng:'5px 4px',
     width:100,
     boxShadow:'none'
    },
    wrapper:{
        margin:'0 8% 0 auto',
        display:'flex',
        '& > *':{
            marginRight:50,
            fontSize:12,
            alignItems:'center',
            textDecoration:'none',
            color:'#fff'
        }
    },
    container:{
        display:'flex'
    }
})
const HeaderButtons=()=> {
    const classes=usestyle();
    const [open,setopen]=useState(false);


    const openLoginDialog=()=>{
              setopen(true);
    }
    
    return (
        <Box className={classes.wrapper}>

            <Link><Button variant="contained" onClick={()=>openLoginDialog()} className={classes.login}>Login</Button></Link>
            <Link><Typography style={{marginTop:5}}>More</Typography></Link>
            <Link to="/cart" className={classes.container}><Badge badgeContent={4} color="secondary">
            <ShoppingCart/>
              </Badge><Typography style={{marginLeft:10}}>
              Cart
            </Typography>
            </Link> 
          <LoginDialog />
        </Box>
    )
}
export default HeaderButtons;