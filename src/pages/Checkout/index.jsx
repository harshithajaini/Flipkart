import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './styles.scss'; // Verify the correct path for your styles
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const {  clearCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="checkout-container">
      {!orderPlaced && (
        <>
            <div className="checkout-form">
              <h2 className="form-title">Shipping Details</h2>
              <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <input type="text" placeholder="Address" /><br/>
                <button className="checkout-btn" onClick={handleCheckout}>Place Order</button>
              </form>
            </div>
        </>
      )}
      {orderPlaced && <p className="order-placed-text">Order Placed!</p>}
      {!isLoggedIn && (
        <p className="login-message">Please log in to complete the purchase. <Link to="/login">Log In</Link></p>
      )}
    </div>
  );
}

export default CheckoutPage;
