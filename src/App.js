import './App.css';
import { Switch , Route , Redirect } from 'react-router-dom';

// Components
import Store from './components/Store'; 
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Switch>
            <Route path='/products/:id' component={ProductDetails} />
            <Route path='/products' component={Store} />
            <Route path='/cart' component={ShopCart} />
            <Redirect to="/products" />
          </Switch>
          <Footer/>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
