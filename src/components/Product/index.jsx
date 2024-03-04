/* eslint-disable react/prop-types */
import './style.css'
function Product({ product }) {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">{product.rating}</div>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
