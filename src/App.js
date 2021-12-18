import logo from './logo.svg';
import { BrowserRouter,Switch ,Route} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Cart from './components/cart/Cart';
function App() {
  return (
    <BrowserRouter>
    <Header />
     <Switch> 
       <Route exact path="/" component={Home} />
       <Route exact path='/cart' component={Cart}/>

     </Switch>
    </BrowserRouter>

  );
}

export default App;
