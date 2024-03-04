import { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';
import Product from '../Product';
import './style.css'; 
// eslint-disable-next-line react/prop-types
function ProductsList({ categoryName }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchProducts(categoryName);
        const data = responseData.products;
        console.log("Fetched data:", data);
        setProducts(data.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="products-list-container">
      <h2 className="category-title">{categoryName}</h2>
      <ul className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
