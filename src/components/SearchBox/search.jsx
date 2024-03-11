import { useState, useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import { Link } from "react-router-dom";
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (debouncedQuery.trim() !== "") {
          const data = await fetchProducts(debouncedQuery);
          setSearchResults(data);
        } else {
          setSearchResults([]); //clears search results when query is empty
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();

    return () => {};
  }, [debouncedQuery]); //runs effect when debouncedQuery changes

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div className="search">
      <div className="search-container">
        <button className="search-btn">
          <img src="/search.svg" alt="search-icon" />
        </button>

        <input
          className="search-box"
          name="Search Box"
          placeholder="Search for Products, Brands and More"
          height="27.5px"
          onChange={handleChange}
        />
        <ul id="searchResults">
          {searchResults.length > 0 &&
            searchResults.map((product) => (
              <li key={product.id}>
                <Link  to={`/${query}}`} >
                  <div style={{color:"black" }}>{product.title}</div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default SearchComponent;
