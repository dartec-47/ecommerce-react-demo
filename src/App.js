import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navigation-bar/Navbar';
import Home from './components/Home';
import { CartProvider } from './containers/CartContext';
import CheckoutPage from './components/CheckoutPage';
import { LoginProvider } from './containers/LoginContext';
import Login from './components/Login';
import OrderRecap from './components/OrderRecap';

function App() {
  

  return (
    <>
      <LoginProvider >
      <CartProvider >
        <Navbar />
        <main>
          <Routes>
            <Route path="/ecommerce-react-demo" element={<Home />} />
            <Route path="/" element={<Home />} />
            {
            //<Route path="/ecommerce-react-demo/shop/:path" element={<Buy />} />
            //<Route path="/ecommerce-react-demo/shop/details/:path" element={<ProductDetails />} />
            }
            <Route path="/ecommerce-react-demo/order/:id" element={<OrderRecap />} />
            <Route path="/ecommerce-react-demo/checkout" element={<CheckoutPage />} />
            <Route path="/ecommerce-react-demo/login" element={<Login />} />

          </Routes>
        </main>
      </CartProvider>
      </LoginProvider>
    </>
  );
}

export default App;
