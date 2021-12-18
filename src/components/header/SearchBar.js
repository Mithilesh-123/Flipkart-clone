import { fade,InputBase,makeStyles} from "@material-ui/core";
import {Search} from '@material-ui/icons';
const usestyle=makeStyles((theme)=>({
    search: {
        borderRadius: 2,
       backgroundColor:'#fff',
        marginLeft:10,
        width: '38%',
        display:'flex',
        color:'black'
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:'blue'
      },
      inputRoot: {
        fontSize:'unset',
        color: 'inherit',
        width:'100%'
      },
      inputInput: {
        paddingLeft:14,
       
      },

    
}))
const SearchBar=()=>{
    const classes=usestyle();
    return(
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products,brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
                <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
    )
}
export default SearchBar;