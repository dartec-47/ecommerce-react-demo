import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/navigation-bar/Header';
import Home from './components/Home';
import ShopMain from './components/ShopMain';
import { CartProvider } from './containers/CartContext';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import { LoginProvider } from './containers/LoginContext';
import Login from './components/Login';
import OrderRecap from './components/OrderRecap';
import Buy from './components/Buy';
import ProductDetails from './components/ProductDetails';

function App() {
  

  return (
    <>
      <LoginProvider >
      <CartProvider >
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopMain />} />
            <Route path="/shop/:path" element={<Buy />} />
            <Route path="/shop/details/:path" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/:id" element={<OrderRecap />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </main>
      </CartProvider>
      </LoginProvider>
    </>
  );
}

export default App;
