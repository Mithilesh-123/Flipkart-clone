import React from 'react';
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';
import Slide from './Slide';
import Midsec from './Midsec';
import { Box,makeStyles} from '@material-ui/core';
const usestyle=makeStyles({
    component:{
        padding:'10px',
        background:'#F2F2F2'
    },
    Rwrapper:{
       background:'#ffffff',
       padding:5,
       margin:'12px 0 0 10px'
    }
    
})
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
export default function Home() {
    const classes=usestyle();
    return (
        <div>
         <NavBar />
       <Box className={classes.component}>
         <Banner />
      
          <Box style={{display:'flex'}}>
            <Box style={{width:'85%'}}>
                <Slide timer={true}  title="Deal of the Day"/>
            </Box> 
           <Box className={classes.Rwrapper}>
             <img src={adURL} style={{width:230}} />
           </Box>
         </Box>
         <Midsec />
         <Slide timer={false}  title="Discount for you"/>
         <Slide timer={false}  title="Suggested Items" />
         <Slide timer={false}  title="Top Selection"/>
         <Slide timer={false}  title="Recommended Items"/>
         <Slide timer={false}  title="Best Sellers"/>
         <Slide timer={false}  title="For you MITHILESH"/>
       </Box>  
        </div>
    )
}
