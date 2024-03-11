async function fetchProducts(query) {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.products;

}

export default fetchProducts;
