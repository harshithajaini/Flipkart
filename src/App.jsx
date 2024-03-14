/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import ViewProducts from './components/ViewProducts';
import ViewProductDetails from './components/ViewProductDetails';
import Layout from './layout';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:query" element={<ViewProducts />} />
          <Route path="/products/:productTitle" element={<ViewProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/cart/checkout'element={<CheckoutPage />}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
