import './App.css';
import GlobalProductsContext from './components/GlobalProductsContext';
import Navbar from './components/Navbar';
// import Slider from './components/Slider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import About from '././components/About';
import GlobalCartContext from './components/GlobalCartContext';

function App() {
  return (
    <div className="App">
      <GlobalProductsContext>
        <GlobalCartContext>
        
        <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Product}/>
            <Route path='/cart' exact component={Cart}/>
            <Route path="/about" exact component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
        </GlobalCartContext>
      </GlobalProductsContext>
    </div>
  );
}

export default App;
