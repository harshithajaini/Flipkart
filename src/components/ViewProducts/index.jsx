import { useState, useEffect } from 'react';
import './styles.scss';
import fetchProductsByPage from '../../api/fetchProductsByPage';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ViewProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [prodapi, setProdapi] = useState([]);
  const productsPerPage = 6;
  const query = useParams();
  const [totalProducts, setTotalProducts] = useState();
  const newQuery = query.query.substring(0, query.query.length - 1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (typeof newQuery === 'string' && newQuery.trim() !== "") {
          const data = await fetchProductsByPage(newQuery, currentPage, productsPerPage, indexOfFirstProduct);
          setProdapi(data.products);
          setTotalProducts(data.total);
          // console.log(data.total);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [newQuery, currentPage]);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };


  const currentProducts = prodapi;

  return (
    <div className='whole-products'>
      <ul className='product-list'>
      {currentProducts.map((product) => (
        <div className="product-container" key={product.id}>
          <Link to={`/products/${product.title}`} >
              <div className="productLink">
                    <div className="productInfo" >
                      <div className="productImageContainer">
                      <img src={product.thumbnail} alt={product.title} className="product-Image" />
                      </div>
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
    </ul>


      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className='prev-btn'>❮</button>
        {Array.from({ length: Math.ceil(totalProducts / productsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : 'inactive'}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(totalProducts / productsPerPage)} className='next-btn'>❯</button>
      </div>
    </div>
  );
};

export default ViewProducts;
