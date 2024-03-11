import { useParams } from "react-router-dom";
import fetchProducts from '../../api/fetchProducts';
import { useEffect, useState } from 'react';

import './styles.scss';
function ViewProductDetails() {
  const [prodapi, setProdapi] = useState();
  const query = useParams();
  console.log("hello", query);
  const newQuery = query.productTitle.substring(0, query.productTitle.length);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (typeof newQuery === 'string' && newQuery.trim() !== "") {
          const data = await fetchProducts(newQuery);
          setProdapi(data);
          console.log("HI", data[0].title);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [newQuery]); // Include newQuery in the dependency array

  // Conditionally render based on prodapi availability
  if (!prodapi || prodapi.length === 0) {
    return <div>Loading...</div>;
  }

  return (
  <div className="product-container-viewAProduct">
    <div className="product-image-container">
      <img src={prodapi[0].thumbnail} alt={prodapi[0].title} className="productImage" />
      <div className="additional-images">
        {prodapi[0].images.slice(0, -1).map((image, index) => (
          <img key={index} src={image} alt={`Additional Image ${index + 1}`} className="additional-image"
          style={{ width: `${100/ (prodapi[0].images.length-1)}% ` ,
          // marginRight: '10px'
        }}/>
        ))}
      </div>
    </div>

    <div className="product-info-container">
      <h1 className="productTitle">{prodapi[0].title}</h1>
      <div className="productRating">&#9733;&#9733;&#9733;&#9733;&#9734; <span>({prodapi[0].rating})</span></div>
      <h5 className="product-description">{prodapi[0].description}</h5>
      <div className="productPrice">Price: ₹{prodapi[0].price}
      <span className="product-discount ">  {prodapi[0].discountPercentage}% off
      </span>
      </div>
      <button type="button" className="cart-btn">
            Add to Cart
          </button>
    </div>
  </div>
);
        }
export default ViewProductDetails;
