
import {AppBar,Toolbar,makeStyles ,Typography,Box,withStyles } from "@material-ui/core";
import Search from "./SearchBar";
import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";

const usestyle=makeStyles({
    header:{
     background:'#2874f0',
     height:55
    },
    logo:{
        width:75
    },
    subURL:{
        width:10,
        marginLeft:4,
        height:10
    },
    container:{
        display:'flex'
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:'#fff'
    },
    plus:{
        fontSize:10,
        fontStyle:'italic'
    }
});

const Header=()=>{
    const classes=usestyle();
 
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <AppBar className={classes.header}>
             <Toolbar>
      
             <Link to ='/' className={classes.component}>    
               <img src={logoURL}  className={classes.logo}/>
               <Box className={classes.container}>
               <Typography className={classes.plus}> Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
               </Typography>
               <img src={subURL} className={classes.subURL} />
               </Box>
            </Link>
          
            <Search />
            <HeaderButtons />
             </Toolbar>

        </AppBar>
    )
}
export default Header;