import { useState, useEffect } from "react";
import "./style.scss";
import fetchProductsByCategory from "../../api/fetchProductsByCategory.jsx";
import { Link } from "react-router-dom";
export default function ProductsList() {
  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const categories = ['smartphones', 'furniture', 'skincare', 'laptops'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedProducts = {};

        for (const categoryName of categories) {
          const response = await fetchProductsByCategory(categoryName);
          const data = await response.json();

          updatedProducts[categoryName] = data.products;
        }

        setAllProducts(updatedProducts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-list-container">
      {Object.entries(allProducts).map(([categoryName, products]) => (
        <div key={categoryName} className="each-category">
          <h2 className="category-title">Best of {categoryName}</h2>
          <div className="products">
            {products.map((product) => (

              <div key={product.id} className="product-details">
                <Link to={`/products/${product.title}`} >
                  <div className="productLink">
                    <div className="productInfo" >
                      <img src={product.thumbnail} alt={product.title} className="product-Image" />
                      <div className="product-dets">
                        <h3 className="productTitle">{product.title}</h3>
                        <div className="productRating">{product.rating}</div>
                        <div className="productPrice">${product.price}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
