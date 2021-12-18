import { Dialog, DialogContent } from "@material-ui/core";


const Login=({open})=>{
    return(
       <Dialog open={open}>
           <DialogContent>
               <p>Hello</p>
           </DialogContent>
       </Dialog>
    )
}

export default Login;