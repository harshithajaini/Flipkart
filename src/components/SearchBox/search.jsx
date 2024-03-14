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
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();

    return () => {};
  }, [debouncedQuery]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery('');
    setSearchResults([]);
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
          value={query} // Set input value to query
        />
        <ul id="searchResults" onClick={(event) => {
          if (event.target.tagName === 'DIV') {
            handleSuggestionClick(searchResults.find(product => product.title === event.target.textContent));
          }
        }}>
          {searchResults.length > 0 &&
            searchResults.map((product) => (
              <li key={product.id}>
                <Link to={`/${query}`}>
                  <div
                    style={{ color: "black" }}
                  >
                    {product.title}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
