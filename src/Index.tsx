import React, { ReactNode, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MyContext } from './CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from "./pages/Payment";

interface ILayoutProps {
  children: ReactNode
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { cartItems } = useContext(MyContext);
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/payment' && <Navbar cartItem={cartItems} />}
      {children}
      {location.pathname !== '/payment' && <Footer />}
    </>
  );
};

const Index: React.FC = function () {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Index;
