import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './cartPage.scss';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      {isLoggedIn ? (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-info">
                  <img src={item.thumbnail} alt={item.title} className="item-thumbnail" />
                  <div className="item-details">
                    <h1 className="item-title">{item.title}</h1>
                    <p className="item-price">&#8377;{item.price}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button
                    className="action-btn add-btn"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p className="item-quantity">{item.quantity}</p>
                  <button
                    className="action-btn remove-btn"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div>
              <div className="cart-total">
                <h1 className="total-text">Total: ${getCartTotal()}</h1>
              </div>
              <button className="clear-btn" onClick={clearCart} style={{ cursor: 'pointer' }}>
                Clear cart
              </button>
              <button>Checkout</button>
            </div>
          ) : (
            <div className="empty-cart-page">
              <h2>Your Cart is Empty</h2>
              <p>Looks like you haven&#39;t added any items to your cart yet.</p>
              <Link to="/">Browse Products</Link>
            </div>
          )}
        </div>
      ) : (
        <div className="login-message">
          <h2>Please log in to view your cart</h2>
          <p>Log in  to access your shopping cart.</p>
          <Link to="/login">Log In</Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
