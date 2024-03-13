import { useParams, Link } from "react-router-dom";
import fetchProducts from '../../api/fetchProducts';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

import './styles.scss';

function ViewProductDetails() {
  const [prodapi, setProdapi] = useState();
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const query = useParams();
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (typeof query.productTitle === 'string' && query.productTitle.trim() !== "") {
          const data = await fetchProducts(query.productTitle);
          setProdapi(data);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query.productTitle]);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowLoginMessage(true);
      return;
    }
    addToCart(prodapi[0]);
    setAddedToCart(true);
  };

  if (!prodapi || prodapi.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container-viewAProduct">
      {showLoginMessage && (
        <div className="login-msg">
        <h2>Please log in to add products to  your cart</h2>
        <p>Log in  to access your shopping cart.</p>
        <Link to="/login">Log In</Link>
      </div>
      )}
      {addedToCart && (
        <div className="added-to-cart-message">
          <p>Product added to cart successfully!</p>
        </div>
      )}
      {!showLoginMessage && !addedToCart && (
        <>
          <div className="product-image-container">
            <img src={prodapi[0].thumbnail} alt={prodapi[0].title} className="productImage" />
            <div className="additional-images">
              {prodapi[0].images.slice(0, -1).map((image, index) => (
                <img key={index} src={image} alt={`Additional Image ${index + 1}`} className="additional-image"
                  style={{ width: `${100 / (prodapi[0].images.length - 1)}% ` }} />
              ))}
            </div>
          </div>
          <div className="product-info-container">
            <h1 className="productTitle">{prodapi[0].title}</h1>
            <div className="productRating">&#9733;&#9733;&#9733;&#9733;&#9734; <span>({prodapi[0].rating})</span></div>
            <h5 className="product-description">{prodapi[0].description}</h5>
            <div className="productPrice">Price: ₹{prodapi[0].price}
              <span className="product-discount ">  {prodapi[0].discountPercentage}% off </span>
            </div>

            <button type="button" className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>


        </>
      )}
    </div>
  );
}

export default ViewProductDetails;
